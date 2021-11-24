import Swal from "sweetalert2";

function errorAlert({text}) {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: text,
        timer: 1500,
      })
}

function successAlert({text}) {
    return Swal.fire({
        icon: 'success',
        title: 'Yeey!',
        text: text,
        timer: 1500,
      })
}

export {
    errorAlert,
    successAlert,
}
