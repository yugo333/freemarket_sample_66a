$(function(){
  
  var dataBox = new DataTransfer();
  var file_field = document.querySelector('input[type=file]')
  $('#img-file').change(function(){
    var files = $('input[type="file"]').prop('files')[0];
    $.each(this.files, function(i, file){
      var fileReader = new FileReader();
      

      dataBox.items.add(file)
      file_field.files = dataBox.files

      var num = $('.item-image').length + 1 + i
      fileReader.readAsDataURL(file);
      

      
      fileReader.onloadend = function() {
        var src = fileReader.result
        var html= `
                <div class='item-image' data-image="${file.name}">
                    <div class=' item-image__content'>
                      <div class='item-image__content--icon'>
                        <img src=${src} width="114" height="150" >
                      </div>
                    </div>
                    <div class='item-image__operetion'>
                      <div class='item-image__operetion--delete'>削除</div>
                    </div>
                    <div class='item-image__operetion--edit'>編集</div>
                    </div>
                  </div>`
        $('#image-box-1').before(html);
      };
      $('#image-box-1').attr('class', `item-num-${num}`)
    });
  });
  $(document).on("click", '.item-image__operetion--delete', function(){
    var target_image = $(this).parent().parent()
    target_image.remove();
    console.log(file_field);
    file_field.val("")
    
    
  })
});