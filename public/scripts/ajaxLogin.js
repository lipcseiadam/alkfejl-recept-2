$('#btnLogin').on('click', function (e) {
    e.prevetnDefault()

    const $modal = $(`
        <div class="modal fade confirm-modal" tabindex="-1" role="dialog" id="loginModal">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
            <div class="modal-header">Belépés</div>
            <div class="modal-body">
                <div class="alert alert-danger"></div>
                <div class="form-area"></div>
            </div>
            </div>
        </div>
        </div>
    `)
})