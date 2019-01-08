$(document).ready(function () {
  $('.forgot-pass').click(function (event) {
    $(".pr-wrap").toggleClass("show-pass-reset");
  });

  $('.pass-reset-submit').click(function (event) {
    $(".pr-wrap").removeClass("show-pass-reset");
  });
});
function uyeOl() {

  document.getElementById("formum").innerHTML = '<div class="loginBaslik"><h3>Kullanıcı Kaydı</h3></div>' +
    '<input type = "text" id = "kullaniciAdi" placeholder = "Kullanıcı adı"  maxlength="10" />' +
    '<input type="password" id="sifre" placeholder="Şifre"  maxlength="10" />' + '<input type="password" id="sifre2" placeholder="Şifre(tekrar)"  maxlength="10" />' +
    '<input type = "text" id ="E-mail" placeholder = "E-mail" />' +
    '<input type="button" value="Kayıt" id="uyeEkle" onclick="kayitEkle()" class="btn btn-success btn" style="width:330px" />' +
    '<div class="remember-forgot">' +
    '<div class="row">' +
    '</div>' +
    '<div class="sosyalMedia"><img src="facebook.png"><img src="twitter.png"><img src="instagram.png"></div>' +
    '</div>' +
    '</div>';

} function kayitEkle() {

  localStorage.setItem('kullaniciAdi', document.getElementById('kullaniciAdi').value);
  localStorage.getItem('kullaniciAdi');

  localStorage.setItem('sifre', document.getElementById('sifre').value);
  localStorage.getItem('sifre');

  if (document.getElementById('sifre').value == document.getElementById('sifre2').value) {

    alert('Kaydınız Basarıyla tamamlanmıştır,Giriş yapabilirsiniz');

  } else {

    alert('Sifreler birbiriyle aynı olmalıdır !');
    document.getElementById("formum").innerHTML = '<div class="loginBaslik"><h3>Kullanıcı Girişi</h3></div>' +
      '<input type = "text" id = "kullaniciAdi" placeholder = "Kullanıcı adı"  maxlength="10" />' +
      '<input type="password" id="sifre" placeholder="Şifre" style="border-color:red"  maxlength="10" />' + '<input type="password" style="border-color:red" id="sifre2" placeholder="Şifre(tekrar)"  maxlength="10" />' +
      '<input type = "text" id ="E-mail" placeholder = "E-mail" />' +
      '<input type="submit" value="Kayıt" id="uyeEkle" onclick="kayitEkle()" class="btn btn-success btn-sm" />' +
      '<div class="remember-forgot">' +
      '<div class="row">' +
      '</div>' +
      '<div class="sosyalMedia"><img src="facebook.png"><img src="twitter.png"><img src="instagram.png"></div>' +
      '</div>' +
      '</div>';
  }
} function girisYap() {

  if (document.getElementById('kullaniciAdi').value == localStorage.getItem('kullaniciAdi') && document.getElementById('sifre').value == localStorage.getItem('sifre')) {

    window.location.href = 'sohbet.html';
    
  } else {

    alert('Kullanıcı Adi veya Şifre Hatalı !');

  }
}