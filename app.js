$(function() {
  isMobile = true;
  $('[data-scroll]').on('click', function(event){
    event.preventDefault();

    blockId = $(this).data('scroll');
    blockOffset = $(blockId).offset().top;

    $('html, body').animate({
      scrollTop: blockOffset - 50
    }, 700);
    console.log(event.target);
  });

  $('[data-certificate]').on('click', function(event) {
    event.preventDefault();

    btnShowCertificate = $(this).data('certificate');

    modal = $(`
      <div class="modal" id="modal">

        <div class="modal_dialog">
          <h3 class="modal_title">
            <p>CERTIFICATE</p>
            <button
              type="button"
              class="close_btn"
              onclick="$('.modal').remove()"
            >
              Close
            </button>
          </h3>
          <img class="modal_photo" src="certificates/${btnShowCertificate}.png" />
        </div>

      </div>
    `);

    $('body').append(modal);
  });
});