import loadingImage from "../../../assets/img/loading.svg";

const handleTestSweetAlert = () => {
    mySweetAlert.fire({
        iconHtml: `<img class="ido-whale" src="${loadingImage}" alt="loading spinner"/>`,
        iconColor: 'white',
        // icon: 'info',
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        background: '#1d263b',
        color: 'white',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonColor: '#33b249',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
        // didOpen: () => {
        //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        //     mySweetAlert.showLoading()
        // },
    })
    // .then(() => {
    //     return mySweetAlert.fire(<p>Shorthand works too</p>)
    // })
}