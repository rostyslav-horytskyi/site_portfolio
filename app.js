$(function() {
  $('[data-scroll]').on('click', function(event){
    event.preventDefault();

    blockId = $(this).data('scroll');
    blockOffset = $(blockId).offset().top;

    $('html, body').animate({
      scrollTop: blockOffset - 50
    }, 700);
  });

  $('[data-certificate]').on('click', function(event) {
    event.preventDefault();

    btnShowCertificate = $(this).data('certificate');

    modal = $(`
      <div class="modal" id="modal">

        <button
          type="button"
          class="close_btn"
          onclick="$('.modal').remove()"
        >
          Close
        </button>

        <div class="modal_dialog">
          <h3 class="modal_title">CERTIFICATE</h3>
          <img class="modal_photo" src="certificates/${btnShowCertificate}.png" />
        </div>

      </div>
    `);

    $('body').append(modal);
  });
});