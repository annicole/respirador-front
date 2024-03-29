import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@app/services/usuario.service';
import { Usuario } from '@app/models/usuario';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { NuevoUsuarioComponent } from '@app/pages/forms/nuevo-usuario/nuevo-usuario.component';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];
  total: number = 0;
  listNav=[
    {"name":"Usuarios", "router":"/usuario"}, 
  ]
  constructor(private usuarioService: UsuarioService, private auth: AuthService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getUsuarios('');
  }


  async getUsuarios(searchValue: string) {
    try {
      let resp = await this.usuarioService.getUsuarios(searchValue, '', this.auth.token).toPromise();
      if (resp.code == 200) {
        this.usuarios = resp.usuario;
        this.total = this.usuarios.length;
      }
    } catch (e) {
      console.log(e);
    }
  }

  addUsuario() {
    const dialogRef = this.dialog.open(NuevoUsuarioComponent, {
      width: '50rem',
      data: {
        title: 'Agregar usuario',
        btnText: 'Guardar',
        alertSuccesText: 'Usuario creado!',
        alertErrorText: "No se puedo crear el usuario",
        modalMode: 'create'
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      this.getUsuarios('');
    });
  }

  updateUsuario(usuario) {
    const dialogRef = this.dialog.open(NuevoUsuarioComponent, {
      width: '40rem',
      data: {
        title: 'Editar usuario',
        btnText: 'Guardar',
        alertSuccesText: 'Usuario modificado correctamente',
        alertErrorText: "No se puedo modificar el usuario",
        modalMode: 'edit',
        usuario
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      this.getUsuarios('');
    });
  }

 delete(id: number) {
    Swal.fire({
      title: '¿Estas seguro?', 
      text: "Desea eliminar el usuario",
      icon: 'warning',
      showCancelButton: true, 
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!', 
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(id, this.auth.token).subscribe(res => {
          if (res.code == 200) {
            Swal.fire('Eliminado', 'El usuario se ha sido eliminado correctamente', 'success');
            this.getUsuarios('');
          } else {
            Swal.fire('Error', 'No fue posible eliminar el usuario', 'error');
          }
        });
      }
    });
  }

  async onSearchChange(searchValue: string) {
    this.getUsuarios(searchValue);
  }
}
