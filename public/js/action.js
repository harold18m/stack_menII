document.addEventListener('DOMContentLoaded', function() {
    const botonesEliminar = document.querySelectorAll('.btnEliminar');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function(event) {
            const clienteId = event.target.dataset.id;

            // Muestra un modal de SweetAlert2 para confirmar la eliminación
            Swal.fire({
                title: '¿Estás seguro?',
                text: '¡No podrás revertir esto!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: '¡Sí, eliminarlo!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Si se confirma la eliminación, redirige a la ruta de eliminación
                    window.location.href = `/delete/${clienteId}`;
                }
            });
        });
    });
});


