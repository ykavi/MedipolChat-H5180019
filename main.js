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
    '<p style="color:#fff"><i>İlk okul öğretmeninizin adı?</i></p>' +
    '<input type = "text" id ="gizliYanit" maxlength ="16" placeholder ="Ahmet.." />' +
    '<input type="button" value="Kayıt" id="uyeEkle" onclick="kayitEkle()" class="btn btn-success btn" style="width:330px" />' +
    '<div class="remember-forgot">' +
    '<div class="row">' +
    '</div>' +
    '<div class="sosyalMedia"><img src="facebook.png"><img src="twitter.png"><img src="instagram.png"></div>' +
    '</div>' +
    '</div>';

} function kayitEkle() {

  if (document.getElementById('kullaniciAdi').value == "" || document.getElementById('sifre').value == "") {
    alert('Tüm alanları doldurmalısınız !');
  } else if (document.getElementById('sifre2').value == "" || document.getElementById('E-mail').value == "") {
    alert('Tüm alanları doldurmalısınız !');
  } else if (document.getElementById('gizliYanit').value == "") {
    alert('Tüm alanları doldurmalısınız !');
  }
  else {
    localStorage.setItem('kullaniciAdi', document.getElementById('kullaniciAdi').value);
    localStorage.getItem('kullaniciAdi');

    localStorage.setItem('sifre', document.getElementById('sifre').value);
    localStorage.getItem('sifre');

    localStorage.setItem('guvenlikSorusu', document.getElementById('gizliYanit').value);

    if (document.getElementById('sifre').value == document.getElementById('sifre2').value) {

      alert('Kaydınız Basarıyla tamamlanmıştır,Giriş yapabilirsiniz');
      window.location.href = 'index.html';

    } else {

      alert('Sifreler birbiriyle aynı olmalıdır !');
      document.getElementById("formum").innerHTML = '<div class="loginBaslik"><h3>Kullanıcı Girişi</h3></div>' +
        '<input type = "text" id = "kullaniciAdi" placeholder = "Kullanıcı adı"  maxlength="10" />' +
        '<input type="password" id="sifre" placeholder="Şifre" style="border-color:red"  maxlength="10" />' + '<input type="password" style="border-color:red" id="sifre2" placeholder="Şifre(tekrar)"  maxlength="10" />' +
        '<input type = "text" id ="E-mail" placeholder = "E-mail" />' +
        '<p style="color:#fff"><i>İlk okul öğretmeninizin adı?</i></p>' +
        '<input type = "text" id ="gizliYanit" maxlength ="16" placeholder ="Ahmet.." />' +
        '<input type="button" value="Kayıt" id="uyeEkle" onclick="kayitEkle()" class="btn btn-success btn" style="width:330px" />' +
        '<div class="remember-forgot">' +
        '<div class="row">' +
        '</div>' +
        '<div class="sosyalMedia"><img src="facebook.png"><img src="twitter.png"><img src="instagram.png"></div>' +
        '</div>' +
        '</div>';
    }
  }
} function girisYap() {

  if (document.getElementById('kullaniciAdi').value == localStorage.getItem('kullaniciAdi') && document.getElementById('sifre').value == localStorage.getItem('sifre')) {

    window.location.href = 'odaSecim.html';

  } else {

    alert('Kullanıcı Adi veya Şifre Hatalı !');
    window.location.href = 'index.html';
  }
} function secilenOda(odaAdi) {

  document.getElementById('baslik').innerHTML = odaAdi.innerHTML;
  localStorage.setItem('secilenOda', odaAdi.innerHTML);
  window.location.href = 'sohbet.html';

} function degisiklikleriEkle() {

  document.getElementById('baslik').innerHTML = localStorage.getItem('secilenOda');

}
function odaGecis(isim) {
  document.getElementById('baslik').innerHTML = '<b>' + isim.id + '</b>';
}
function sifremiUnuttum() {

  document.getElementById("formum").innerHTML = '<div class="loginBaslik"><h3>Şifremi Unuttum</h3></div>' +
    '<p style="color:#fff"><b>İlk okul öğretmeninizin adı?</b></p>' +
    '<input type = "text" id ="gizliYanit" maxlength ="16" placeholder ="Ahmet.." />' +
    '<input type="submit" value="Devam" id="sifreYenileme" onclick="sifreYenile()" class="btn btn-success btn-sm" />' +
    '<div class="remember-forgot">' +
    '<div class="row">' +
    '</div>' +
    '<div class="sosyalMedia"><img src="facebook.png"><img src="twitter.png"><img src="instagram.png"></div>' +
    '</div>' +
    '</div>';
}
function sifreYenile() {
  if (document.getElementById('gizliYanit').value == '') {
    alert('Lütfen gerekli alanı doldurun !');
    document.getElementById("formum").innerHTML = '<div class="loginBaslik"><h3>Şifremi Unuttum</h3></div>' +
      '<p style="color:#fff"><b>İlk okul öğretmeninizin adı?</b></p>' +
      '<input type = "text" id ="gizliYanit" maxlength ="16" style ="border-color:red" placeholder ="Ahmet.." />' +
      '<input type="submit" value="Devam" id="sifreYenileme" onclick="sifreYenile()" class="btn btn-success btn-sm" />' +
      '<div class="remember-forgot">' +
      '<div class="row">' +
      '</div>' +
      '<div class="sosyalMedia"><img src="facebook.png"><img src="twitter.png"><img src="instagram.png"></div>' +
      '</div>' +
      '</div>';
  } else if (document.getElementById('gizliYanit').value == localStorage.getItem('guvenlikSorusu')) {
    document.getElementById("formum").innerHTML = '<div class="loginBaslik"><h3>Şifremi Unuttum</h3></div>' +
      '<p style="color:#fff">Kullanıcı Adınız : <b>' + localStorage.getItem('kullaniciAdi') + '</b></p>' +
      '<p style="color:#fff">Şifreniz : <b>' + localStorage.getItem('sifre') + '</b></p>' +
      '<input type="submit" value="Giriş Sayfası" id="sifreYenileme" onclick="sifreYenile()" class="btn btn-success btn-sm" />' +
      '<div class="remember-forgot">' +
      '<div class="row">' +
      '</div>' +
      '<div class="sosyalMedia"><img src="facebook.png"><img src="twitter.png"><img src="instagram.png"></div>' +
      '</div>' +
      '</div>';
  } else {
    alert('Girilen cevap yanlış !');
    document.getElementById("formum").innerHTML = '<div class="loginBaslik"><h3>Şifremi Unuttum</h3></div>' +
      '<p style="color:#fff"><b>İlk okul öğretmeninizin adı?</b></p>' +
      '<input type = "text" id ="gizliYanit" maxlength ="16" style ="border-color:red" placeholder ="Ahmet.." />' +
      '<input type="submit" value="Devam" id="sifreYenileme" onclick="sifreYenile()" class="btn btn-success btn-sm" />' +
      '<div class="remember-forgot">' +
      '<div class="row">' +
      '</div>' +
      '<div class="sosyalMedia"><img src="facebook.png"><img src="twitter.png"><img src="instagram.png"></div>' +
      '</div>' +
      '</div>';
  }
}
function aktiflerKuzey() {
  document.getElementById('aktifKullanicilar').innerHTML = '<li>Canan</li>' + '<li>Yunus</li>' + '<li>Emre</li>' + '<li>Taner</li>' + '<li>Gökhan</li>' + '<li>Şener Kaya</li>';
}
function aktiflerGuney() {
  document.getElementById('aktifKullanicilar').innerHTML = '<li>Yunus</li>' + '<li>Şener Kaya</li>' + '<li>Taner</li>' + '<li>Taner</li>' + '<li>Pınar</li>' + '<li>Gökhan</li>' + '<li>Hami</li>';
}
function aktiflerA() {
  document.getElementById('aktifKullanicilar').innerHTML = '<li>Şener Kaya</li>' + '<li>Kutsi</li>' + '<li>ÖmürDemir</li>' + '<li>Yılmaz</li>' + '<li>Pınar</li>' + '<li>Gökhan</li>' + '<li>Hami</li>';
}
function aktiflerB() {
  document.getElementById('aktifKullanicilar').innerHTML = '<li>Yunus</li>' + '<li>Emre</li>' + '<li>Taner</li>' + '<li>Şener Kaya</li>' + '<li>Pınar</li>' + '<li>Gökhan</li>' + '<li>Hami</li>';
}
function aktiflerC() {
  document.getElementById('aktifKullanicilar').innerHTML = '<li>YakupDemir</li>' + '<li>Yüksel Kaya</li>' + '<li>Burhan</li>' + '<li>Şener Kaya</li>' + '<li>Pınar</li>' + '<li>Gökhan</li>' + '<li>Hami</li>';
}
function aktiflerPolin() {
  document.getElementById('aktifKullanicilar').innerHTML = '<li>Hüdanur</li>' + '<li>Şener Kaya</li>' + '<li>Kaya</li>' + '<li>Osman</li>' + '<li>Pınar</li>' + '<li>Gökhan</li>' + '<li>Hami</li>';
}