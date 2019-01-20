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
    '<div class="sosyalMedia"><a href="https://www.facebook.com/yunusemre.kavi"><img src="facebook.png"></a><a href="https://twitter.com/YunusEmreKavi"><img src="twitter.png"></a><a href="https://www.instagram.com/kavii_x/?hl=tr"><img src="instagram.png"></a></div>' +
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
        '<div class="sosyalMedia"><a href="https://www.facebook.com/yunusemre.kavi"><img src="facebook.png"></a><a href="https://twitter.com/YunusEmreKavi"><img src="twitter.png"></a><a href="https://www.instagram.com/kavii_x/?hl=tr"><img src="instagram.png"></a></div>' +
        '</div>' +
        '</div>';
    }
  }
} function girisYap() {

  for (let index = 0; index < adminler.length; index++) {

    if (document.getElementById('kullaniciAdi').value == adminler[index].kullaniciAdi && document.getElementById('sifre').value == adminler[index].sifre) {

      localStorage.setItem('aktifAdmin', adminler[index].kullaniciAdi);
      document.body.innerHTML =

        '<div class="sohbetAdm">' +
        '<div class="headerAdm" style="opacity:0.8"><i><b onclick="anaSayfaGec()" style="cursor:pointer">MedipolChat</b></i></div>' +
        '<div class="sohbetPaneliAdm">' +
        '<div class="adminHosgeldinAdm" id="adminHoslama">' +
        '</div>' +
        '<div class="admIcerik"> Haftalık Ziyaretci Sayımız <br><br> <b>215</b> </div>' +
        '<div class="admIcerik2">Şuan Aktif Olan Kullanıcı Sayımız <br><br> <b>20</b></div>' +
        '<div class="admAlt">' +
        '<div class="altAdm" id="repOnay"></div>' +
        ' </div>' +
        '</div>' +
        '</div>' 


        document.getElementById('adminHoslama').innerHTML = 'Yöneticilerimizden <br> <b>' + localStorage.getItem('aktifAdmin') + '</b> hoşgeldiniz';
        document.getElementById('repOnay').innerHTML = '<b>'+localStorage.getItem('kullaniciAdi')+'</b>'+' Kullanıcı Adlı kişinin '+'<b>'+localStorage.getItem('repYazi')+'</b>'+' Mesajı Şikayet edilmiştir,Onayınız Bekleniyor <br><button class="devam" onclick="repOnaylandi()">Onayla</button>';

    }

  }


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
    '<div class="sosyalMedia"><a href="https://www.facebook.com/yunusemre.kavi"><img src="facebook.png"></a><a href="https://twitter.com/YunusEmreKavi"><img src="twitter.png"></a><a href="https://www.instagram.com/kavii_x/?hl=tr"><img src="instagram.png"></a></div>' +
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
      '<div class="sosyalMedia"><a href="https://www.facebook.com/yunusemre.kavi"><img src="facebook.png"></a><a href="https://twitter.com/YunusEmreKavi"><img src="twitter.png"></a><a href="https://www.instagram.com/kavii_x/?hl=tr"><img src="instagram.png"></a></div>' +
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
      '<div class="sosyalMedia"><a href="https://www.facebook.com/yunusemre.kavi"><img src="facebook.png"></a><a href="https://twitter.com/YunusEmreKavi"><img src="twitter.png"></a><a href="https://www.instagram.com/kavii_x/?hl=tr"><img src="instagram.png"></a></div>' +
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
      '<div class="sosyalMedia"><a href="https://www.facebook.com/yunusemre.kavi"><img src="facebook.png"></a><a href="https://twitter.com/YunusEmreKavi"><img src="twitter.png"></a><a href="https://www.instagram.com/kavii_x/?hl=tr"><img src="instagram.png"></a></div>' +
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
function mesajGonder() {
  var kufur;
  if (document.getElementById('mesaj').value != "" && document.getElementById('mesaj').value != " " && document.getElementById('mesaj').value != "  ") {

    kufurList.forEach(element => {

      if (element == document.getElementById('mesaj').value) {
        kufur = 'var';
      }
    });
    if (kufur != 'var') {
      document.getElementById('sohbetler').innerHTML += '<li><span id="report" onclick="report(this)">' + document.getElementById('mesaj').value + '</span><b><i style="color:green"> : ' + localStorage.getItem('kullaniciAdi') + '</i></b>' + '</li>';
    } else {
      document.getElementById('sohbetler').innerHTML += '<li>********<b><i style="color:green"> : ' + localStorage.getItem('kullaniciAdi') + '</i></b>' + '</li>';
    }
  }
} function anaSayfaGec() {
  window.location.href = 'index.html';
}
function enterSend(event) {
  var keyKod = event.which || event.keyCode;
  if (keyKod == 13) {
    document.getElementById('mesajGonder').click();
  }
}
function report(yazi) {
  localStorage.setItem('repYazi',yazi.innerHTML);
  localStorage.setItem('repKullanici',localStorage.getItem('KullaniciAdi'));
  document.getElementById('sohbetler').innerHTML = '<div id="reportIcerik" class="reportEkran"></div>';
  document.getElementById('reportIcerik').innerHTML = '<b style="color:green">' + localStorage.getItem('kullaniciAdi') + '</b>  ' + 'Kullanıcı adlı kişisinin  <u><b>' + yazi.innerHTML + '</b></u>' + '  mesajını Şikayet etmek istiyor musunuz ?<br><br><input type="button" onclick="sikayetOnay()" value="Evet" class="devam" /><input type="button" onclick="sikayetGeri()" value="Hayır" class="devam" />';
}
function sikayetOnay() {
  alert('Şikayetiniz için Teşekkürler,gerekli işlemler yapılacaktır.');
  window.location.href = 'sohbet.html';
}
function repOnaylandi(){
  document.getElementById('repOnay').innerHTML = '<b>'+localStorage.getItem('kullaniciAdi')+'</b> Adlı Kullanıcının Üyeliği Başarıyla Silinmiştir.';
  localStorage.removeItem('kullaniciAdi');
}
function sikayetGeri(){
  window.location.href = 'sohbet.html';
}