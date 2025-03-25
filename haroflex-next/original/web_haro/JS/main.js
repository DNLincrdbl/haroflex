function Load()
{
    setTimeout(function()
    {
        document.getElementById("brand").style="opacity: 0"
        document.getElementById("footer1").style="opacity: 1"
        document.getElementById("footer2").style="opacity: 1"
        document.getElementById("nav").style="visibility: visible"
        document.getElementById("leftCover").style="width: 0; opacity: 0"
        document.getElementById("rightCover").style="width: 0; opacity: 0"

        document.getElementById("nav").classList.add("w3-animate-top")
        document.getElementById("footer1").classList.add("w3-animate-opacity")
        document.getElementById("footer2").classList.add("w3-animate-opacity")
        document.getElementById("rolunkBtn").classList.add("w3-animate-top")
        document.getElementById("kezdolapBtn").classList.add("w3-animate-left")
        document.getElementById("termekekBtn").classList.add("w3-animate-top")
        document.getElementById("kapcsolatBtn").classList.add("w3-animate-right")

    }, 1500)

    setTimeout(function()
    {
        document.getElementById("brand2").style="opacity: 0"

        document.getElementById("welcomeText").style = "opacity: 1"
        document.getElementById("welcomeBrand").style = "opacity: 1"
        document.getElementById("welcomeBrand").classList.add("w3-animate-bottom")

        document.getElementById("welcomeDesc").style = "opacity: 1"
        document.getElementById("welcomeDesc").classList.add("w3-animate-bottom")
        document.getElementById("welcomeImg").style = "opacity: 1"
        document.getElementById("welcomeImg").classList.add("w3-animate-bottom")
        document.getElementById("welcomeInfo").style = "opacity: 1"
        document.getElementById("welcomeInfo").classList.add("w3-animate-bottom")
    }, 2500)
    setTimeout(function() { document.getElementById("loadScreen").style="display: none" }, 3000)
}

setTimeout(function()
{
    new fullScroll(
    {
        displayDots: true,
        animateTime: 0.75,
        mainElement: "main",
        dotsPosition: "right",
        animateFunction: "ease",
    });
}, 2500)

function moveUp()
{
    let num = this.location.href.split('#')[1]
    if (num == 0) this.location.href = this.location.origin + "#1"
    if (num == 1) this.location.href = this.location.origin + "#2"
    if (num == 2) this.location.href = this.location.origin + "#3"
    if (num == 3) this.location.href = this.location.origin + "#0"
}

function moveDown()
{
    let num = this.location.href.split('#')[1]
    if (num == 0) this.location.href = this.location.origin + "#3"
    if (num == 1) this.location.href = this.location.origin + "#0"
    if (num == 2) this.location.href = this.location.origin + "#1"
    if (num == 3) this.location.href = this.location.origin + "#2"
}

function setModal()
{
    if ($("#temp").text() == "1")
    {
        let images = ["turbojet50_200", "turbojet63_300", "turbojet75_300", "turbojet90_350"]
        let texts = ["50/200, 50/240", "63/300, 63/330", "75/300, 75/350", "90/350, 90/400"]
        $("#moreModalLabel").html("TURBOJET ÖNTÖZŐDOBOK")
        $("#box5").css('display', 'none')
        modalElements(images, texts)
    }
    else if ($("#temp").text() == "2")
    {
        let texts = ["Atom 28", "B 30", "Jet 40", "Atom 42", "Jet 65"]
        let images = ["atom28", "b30", "jet40", "atom42", "jet65"]
        $("#moreModalLabel").html("JET VÍZÁGYÚK")
        $("#box5").css('display', 'block')
        modalElements(images, texts)
    }
    else
    {
        let texts = ["50/5 mm", "63/7 mm", "75/7.5 mm", "90/10 mm"]
        let images = ["kpe", "kpe", "kpe", "kpe", "kpe"]
        $("#moreModalLabel").html("KPE CSÖVEK")
        $("#box5").css('display', 'none')
        modalElements(images, texts)
    }
}
function modalElements(images, texts)
{
    for (let i = 1; i <= images.length; i++)
    {
        $('#mImg'+i).css('background-image', 'url(../Assets/'+images[i-1]+'.jpg)');
        $('#mTxt'+i).text(texts[i-1])
    }
}

function SEM(index)
{
    $('#seModal').modal('show');
    $('#moreModal').modal('hide');

    if ($('#temp').text() == '1')
    {
        if (index == 0)
        {
            $('#semTitle').html("50")
            $('#semSmallTxt1').html("50/200")
            $('#semSmallTxt2').html("50/200F")
            $('#semSmallTxt3').html("50/240F")
            $('#semSmallTxt4').html("50/240")
            $('#semSmallImg1').attr('src', '../Assets/turbojet50_200.jpg')
            $('#semSmallImg2').attr('src', '../Assets/turbojet50_200-forg.jpg')
            $('#semSmallImg3').attr('src', '../Assets/turbojet50_240-forg.jpg')
            $('#semSmallImg4').attr('src', '../Assets/turbojet50_240.jpg')
            $('#semBigImg').css('background-image', 'url(../Assets/turbojet50_200.jpg)')
            $('#productInfo').html("Tömlőhossz.: 200m<br>3 fokozatú tömlőbevontatás<br>Vízágyú típusa: JET szektoros<br>Bevontatás végállás kapcsoló<br>Alumínium vízturbina ház+rotor<br>Gyors öntözés funkció (kb. 2h/200fm)<br>Max. munkaszélesség: 55m (14mm fúvóka)<br>Extra vastag KPE tömlő (5mm falvastagság)<br>Alacsony üzemi nyomástól (2,5bar) működő rendszer<br>Tűzi horganyozott vázszerkezet (opcionálisan rendelhető)<br>Forgózsámolyos dob elforgatás (opcionálisan rendelhető)")
        }
        else if(index == 1)
        {
            $('#semTitle').html("63")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("63/300")
            $('#semSmallTxt3').html("63/330")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '../Assets/turbojet63_300.jpg')
            $('#semSmallImg3').attr('src', '../Assets/turbojet63_330.jpg')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/turbojet63_300.jpg)')
            $('#productInfo').html("Tömlőhossz.: 300m<br>3 kerekű vízágyú kocsi<br>3 fokozatú tömlőbevontatás<br>Bevontatás végállás kapcsoló<br>Le-fel hajtható támasztólábak<br>Alumínium vízturbina ház+rotor<br>Gyors öntözés funkció (kb. 3h/300f.)<br>Vízágyú típusa: Jet 40 rotoros vízágyú<br>Állítható magasságú letalpaló támasz<br>Max.munkaszélesség:80m.(16mm.fúvóka)<br>Extra vastag KPE tömlő (7mm falvastagság)<br>Forgózsámolyos dob elforgatás (alapkivitel)<br>6 bordás kardáncsonk csatl. A gépi becsévéléshez<br>Tűzihorganyozott vázszerkezet (opcionálisan rendelhető)<br>Hidraulikus letalapaló rendszer (opcionálisan rendelhető)<br>Egyenletes sebességű tömlőbevontatás (bypass funkció)")
        }
        else if(index == 2)
        {
            $('#semTitle').html("75")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("75/300")
            $('#semSmallTxt3').html("75/350")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '../Assets/turbojet75_300.jpg')
            $('#semSmallImg3').attr('src', '../Assets/turbojet75_350.jpg')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/turbojet75_350.jpg)')
            $('#productInfo').html("Tömlőhossz.: 300m<br>Bevontatás végállás kapcsoló<br>Forgózsámolyos dob elforgatás<br>Gyors öntözési funkció (kb. 1h/100m)<br>Állandó sebességű tömlőbevontatás<br>Nagy teherbírású fúvott gumiköpenyek<br>Hajtóműbe integrált vízturbina (COMET)<br>6 bordás kardáncsonk a gépi becsévéléshez<br>Extra vastag KPE tömlő (7,5mm falvastagság)<br>Négy fokozatú tömlőbevontatás+bypass funkció<br>Max. munkaszélesség: 120m (34mm fúvóka/10bar)<br>Állítható nyomtáv a vízágyú kocsin és a dobkocsin is<br>Tűzihorganyzott vázszerkezet (opcionálisan rendelhető)<br>Vízágyú típusa: Jet 65 szektorálható rotoros vízágyú (24,26,28,30,32 fúvókával)<br>Hidraulikus letalpaló rendszer, ami egyúttal az öntözőkocsi szekrényt is emeli/engedi és a vontatógép rendszeréről működtetett")
        }
        else
        {
            $('#semTitle').html("90")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("90/350")
            $('#semSmallTxt3').html("90/400")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '../Assets/turbojet90_350.jpg')
            $('#semSmallImg3').attr('src', '../Assets/turbojet90_400.jpg')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/turbojet90_350.jpg)')
            $('#productInfo').html("Tömlőhossz.: 350m<br>Bevontatás végállás kapcsoló<br>Forgózsámolyos dob elforgatás<br>Gyors öntözési funkció (kb. 1h/100m)<br>Állandó sebességű tömlőbevontatás<br>Nagy teherbírású fúvott gumiköpenyek<br>Hajtóműbe integrált vízturbina (COMET)<br>6 bordás kardáncsonk a gépi becsévéléshez<br>Extra vastag KPE tömlő (9.5mm falvastagság)<br>Négy fokozatú tömlőbevontatás+bypass funkció<br>Max. munkaszélesség: 120m (34mm fúvóka/10bar)<br>Állítható nyomtáv a vízágyú kocsin és a dobkocsin is<br>Tűzihorganyzott vázszerkezet (opcionálisan rendelhető)<br>Hidraulikus letalpaló rendszer, ami egyúttal az öntözőkocsi szekrényt is emeli/engedi és a vontatógép rendszeréről működtetett")
        }
    }
    else if ($('#temp').text() == '2')
    {
        if (index == 0)
        {
            $('#semTitle').html("Atom 28")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '../Assets/atom28.jpg')
            $('#semSmallImg3').attr('src', '../Assets/atom28-2.jpg')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/atom28.jpg)')
            $('#productInfo').html("Súly: 1,680 kg<br>Vízigény: 6,5 - 18,8 m³<br>Nyomás: 2 - 5 kg/cm²<br>Csatlakozó átmérő: 1,5'<br>Fúvókák: 10mm - 12mm - 14 mm")
        }
        else if (index == 1)
        {
            $('#semTitle').html("B 30")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '../Assets/b30.jpg')
            $('#semSmallImg3').attr('src', '../Assets/b30-2.jpg')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/b30.jpg)')
            $('#productInfo').html("Súly: 1,80 kg<br>Vízigény: 6 - 23,5 m³<br>Nyomás: 2-6 kg/cm²<br>Csatlakozó átmérő: 1,5'<br>Fúvókák: 8mm X 10mm X 12mm X 14mm")
        }
        else if (index == 2)
        {
            $('#semTitle').html("Jet 40")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '../Assets/jet40.jpg')
            $('#semSmallImg3').attr('src', '../Assets/jet40-2.jpg')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/jet40.jpg)')
            $('#productInfo').html("Súly: 6,0 kg<br>Vízigény: 7 - 44 m³<br>Nyomás: 2 - 6 kg/cm²<br>Csatlakozó átmérő: 2'<br>Fúvókák: 10mm X 12mm X 14mm X 16mm X 18mm X 20mm X 22mm")
        }
        else if (index == 3)
        {
            $('#semTitle').html("Atom 42")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '../Assets/atom42.jpg')
            $('#semSmallImg3').attr('src', '../Assets/atom42-2.jpg')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/atom42.jpg)')
            $('#productInfo').html("Csatlakozó átmérő: 2'<br>Fúvókák: 12mm X 14mm X 16mm X 18mm X 20mm X 22mm")
        }
        else
        {
            $('#semTitle').html("Jet 65")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '../Assets/jet65.jpg')
            $('#semSmallImg3').attr('src', '../Assets/jet65-2.jpg')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/jet65.jpg)')
            $('#productInfo').html("Súly: 9,0 kg<br>Vízigény: 28 - 108 m³<br>Nyomás: 3 - 7 kg/cm²<br>Csatlakozó átmérő: 2,5'<br>Fúvókák: 20mm X 22mm X 24mm X 26mm X 28mm X 30mm X 32mm")
        }
    }
    else
    {
        if (index == 0)
        {
            $('#semTitle').html("50/5 mm")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '')
            $('#semSmallImg3').attr('src', '')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/kpe.jpg)')
            $('#productInfo').html("Bar: 10<br>Átmérő: 50mm<br>Hossz.(tól-ig): 200-240m<br>Falvastagság: 5mm<br>Súly: 1,45fm/kg")
        }
        else if (index == 1)
        {
            $('#semTitle').html("63/7 mm")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '')
            $('#semSmallImg3').attr('src', '')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/kpe.jpg)')
            $('#productInfo').html("Bar: 10<br>Átmérő: 63mm<br>Hossz.(tól-ig): 300-330m<br>Falvastagság: 7mm<br>Súly: 0,82fm/kg")
        }
        else if (index == 2)
        {
            $('#semTitle').html("75/7.5 mm")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '')
            $('#semSmallImg3').attr('src', '')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/kpe.jpg)')
            $('#productInfo').html("Bar: 10<br>Átmérő: 75mm<br>Hossz.(tól-ig): 200-400m<br>Falvastagság: 7.5mm<br>Súly: 0,64fm/kg")
        }
        else
        {
            $('#semTitle').html("90/10 mm")
            $('#semSmallTxt1').html("")
            $('#semSmallTxt2').html("")
            $('#semSmallTxt3').html("")
            $('#semSmallTxt4').html("")
            $('#semSmallImg1').attr('src', '')
            $('#semSmallImg2').attr('src', '')
            $('#semSmallImg3').attr('src', '')
            $('#semSmallImg4').attr('src', '')
            $('#semBigImg').css('background-image', 'url(../Assets/kpe.jpg)')
            $('#productInfo').html("Bar: 10<br>Átmérő: 90mm<br>Hossz.(tól-ig): 300-500m<br>Falvastagság: 10mm<br>Súly: 0,41fm/kg")
        }
    }
}

function setBig(imgNum)
{
    $('#semBigImg').css('background-image', 'url('+$('#semSmallImg'+imgNum).attr('src')+')')

    if ($('#temp').text() == '1')
    {
        if ($("#semTitle").html() == "50")
        {
            if (imgNum == 1) $('#productInfo').html("Tömlőhossz.: 200m<br>3 fokozatú tömlőbevontatás<br>Vízágyú típusa: JET szektoros<br>Bevontatás végállás kapcsoló<br>Alumínium vízturbina ház+rotor<br>Gyors öntözés funkció (kb. 2h/200fm)<br>Max. munkaszélesség: 55m (14mm fúvóka)<br>Extra vastag KPE tömlő (5mm falvastagság)<br>Alacsony üzemi nyomástól (2,5bar) működő rendszer<br>Tűzi horganyozott vázszerkezet (opcionálisan rendelhető)<br>Forgózsámolyos dob elforgatás (opcionálisan rendelhető)")
            if (imgNum == 2) $('#productInfo').html("Tömlőhossz.: 200m<br>Forgózsámolyos kivitel<br>Vízágyú típusa: JET szektoros<br>3 fokozatú tömlőbevontatás<br>Bevontatás végállás kapcsoló<br>Alumínium vízturbina ház+rotor<br>Gyors öntözés funkció (kb. 2h/200fm)<br>Max. munkaszélesség: 55m (14mm fúvóka)<br>Extra vastag KPE tömlő (5mm falvastagság)<br>Alacsony üzemi nyomástól (2,5bar) működő rendszer<br>Tűzi horganyozott vázszerkezet (opcionálisan rendelhető)<br>Forgózsámolyos dob elforgatás (opcionálisan rendelhető)")
            if (imgNum == 3) $('#productInfo').html("Tömlőhossz.: 240m<br>3 fokozatú tömlőbevontatás<br>Vízágyú típusa: JET szektoros<br>Bevontatás végállás kapcsoló<br>Alumínium vízturbina ház+rotor<br>Gyors öntözés funkció (kb. 2h/200fm)<br>Max. munkaszélesség: 55m (14mm fúvóka)<br>Extra vastag KPE tömlő (5mm falvastagság)<br>Alacsony üzemi nyomástól (2,5bar) működő rendszer<br>Tűzi horganyozott vázszerkezet (opcionálisan rendelhető)<br>Forgózsámolyos dob elforgatás (opcionálisan rendelhető)")
            if (imgNum == 4) $('#productInfo').html("Tömlőhossz.: 240m<br>Forgózsámolyos kivitel<br>3 fokozatú tömlőbevontatás<br>Vízágyú típusa: JET szektoros<br>Bevontatás végállás kapcsoló<br>Alumínium vízturbina ház+rotor<br>Gyors öntözés funkció (kb. 2h/200fm)<br>Max. munkaszélesség: 55m (14mm fúvóka)<br>Extra vastag KPE tömlő (5mm falvastagság)<br>Alacsony üzemi nyomástól (2,5bar) működő rendszer<br>Tűzi horganyozott vázszerkezet (opcionálisan rendelhető)<br>Forgózsámolyos dob elforgatás (opcionálisan rendelhető)")
        }
        if ($("#semTitle").html() == "63")
        {
            if (imgNum == 2) $('#productInfo').html("Tömlőhossz.: 300m<br>3 kerekű vízágyú kocsi<br>3 fokozatú tömlőbevontatás<br>Bevontatás végállás kapcsoló<br>Le-fel hajtható támasztólábak<br>Alumínium vízturbina ház+rotor<br>Gyors öntözés funkció (kb. 3h/300f.)<br>Vízágyú típusa: Jet 40 rotoros vízágyú<br>Állítható magasságú letalpaló támasz<br>Max.munkaszélesség:80m.(16mm.fúvóka)<br>Extra vastag KPE tömlő (7mm falvastagság)<br>Forgózsámolyos dob elforgatás (alapkivitel)<br>6 bordás kardáncsonk csatl. A gépi becsévéléshez<br>Tűzihorganyozott vázszerkezet (opcionálisan rendelhető)<br>Hidraulikus letalapaló rendszer (opcionálisan rendelhető)<br>Egyenletes sebességű tömlőbevontatás (bypass funkció)")
            if (imgNum == 3) $('#productInfo').html("Tömlőhossz.: 330m<br>3 kerekű vízágyú kocsi<br>3 fokozatú tömlőbevontatás<br>Bevontatás végállás kapcsoló<br>Le-fel hajtható támasztólábak<br>Alumínium vízturbina ház+rotor<br>Gyors öntözés funkció (kb. 3h/300f.)<br>Állítható magasságú letalpaló támasz<br>Max.munkaszélesség:80m.(16mm.fúvóka)<br>Extra vastag KPE tömlő (7mm falvastagság)<br>Vízágyú típusa:RIVER szektoros forgótárcsás<br>Forgózsámolyos dob elforgatás (alapkivitel)<br>6 bordás kardáncsonk csatl. A gépi becsévéléshez<br>Egyenletes sebességű tömlőbevontatás (bypass funkció)<br>Tűzihorganyozott vázszerkezet (opcionálisan rendelhető)")
        }
        if ($("#semTitle").html() == "75")
        {
            if (imgNum == 2) $('#productInfo').html("Tömlőhossz.: 300m<br>Bevontatás végállás kapcsoló<br>Forgózsámolyos dob elforgatás<br>Gyors öntözési funkció (kb. 1h/100m)<br>Állandó sebességű tömlőbevontatás<br>Nagy teherbírású fúvott gumiköpenyek<br>Hajtóműbe integrált vízturbina (COMET)<br>6 bordás kardáncsonk a gépi becsévéléshez<br>Extra vastag KPE tömlő (7,5mm falvastagság)<br>Négy fokozatú tömlőbevontatás+bypass funkció<br>Max. munkaszélesség: 120m (34mm fúvóka/10bar)<br>Állítható nyomtáv a vízágyú kocsin és a dobkocsin is<br>Tűzihorganyzott vázszerkezet (opcionálisan rendelhető)<br>Vízágyú típusa: Jet 65 szektorálható rotoros vízágyú (24,26,28,30,32 fúvókával)<br>Hidraulikus letalpaló rendszer, ami egyúttal az öntözőkocsi szekrényt is emeli/engedi és a vontatógép rendszeréről működtetett")
            if (imgNum == 3) $('#productInfo').html("Tömlőhossz.: 350m<br>Bevontatás végállás kapcsoló<br>Forgózsámolyos dob elforgatás<br>Gyors öntözési funkció (kb. 1h/100m)<br>Állandó sebességű tömlőbevontatás<br>Nagy teherbírású fúvott gumiköpenyek<br>Hajtóműbe integrált vízturbina (COMET)<br>6 bordás kardáncsonk a gépi becsévéléshez<br>Extra vastag KPE tömlő (7,5mm falvastagság)<br>Négy fokozatú tömlőbevontatás+bypass funkció<br>Max. munkaszélesség: 120m (34mm fúvóka/10bar)<br>Állítható nyomtáv a vízágyú kocsin és a dobkocsin is<br>Tűzihorganyzott vázszerkezet (opcionálisan rendelhető)<br>Vízágyú típusa: Jet 65 szektorálható rotoros vízágyú (24,26,28,30,32 fúvókával)<br>Hidraulikus letalpaló rendszer, ami egyúttal az öntözőkocsi szekrényt is emeli/engedi és a vontatógép rendszeréről működtetett")
        }
        if ($("#semTitle").html() == "90")
        {
            if (imgNum == 2) $('#productInfo').html("Tömlőhossz.: 350m<br>Bevontatás végállás kapcsoló<br>Forgózsámolyos dob elforgatás<br>Gyors öntözési funkció (kb. 1h/100m)<br>Állandó sebességű tömlőbevontatás<br>Nagy teherbírású fúvott gumiköpenyek<br>Hajtóműbe integrált vízturbina (COMET)<br>6 bordás kardáncsonk a gépi becsévéléshez<br>Extra vastag KPE tömlő (9.5mm falvastagság)<br>Négy fokozatú tömlőbevontatás+bypass funkció<br>Max. munkaszélesség: 120m (34mm fúvóka/10bar)<br>Állítható nyomtáv a vízágyú kocsin és a dobkocsin is<br>Tűzihorganyzott vázszerkezet (opcionálisan rendelhető)<br>Hidraulikus letalpaló rendszer, ami egyúttal az öntözőkocsi szekrényt is emeli/engedi és a vontatógép rendszeréről működtetett")
            if (imgNum == 3) $('#productInfo').html("Tömlőhossz.: 400m<br>Bevontatás végállás kapcsoló<br>Forgózsámolyos dob elforgatás<br>Gyors öntözési funkció (kb. 1h/100m)<br>Állandó sebességű tömlőbevontatás<br>Nagy teherbírású fúvott gumiköpenyek<br>Hajtóműbe integrált vízturbina (COMET)<br>6 bordás kardáncsonk a gépi becsévéléshez<br>Extra vastag KPE tömlő (9.5mm falvastagság)<br>Négy fokozatú tömlőbevontatás+bypass funkció<br>Max. munkaszélesség: 120m (34mm fúvóka/10bar)<br>Állítható nyomtáv a vízágyú kocsin és a dobkocsin is<br>Tűzihorganyzott vázszerkezet (opcionálisan rendelhető)<br>Hidraulikus letalpaló rendszer, ami egyúttal az öntözőkocsi szekrényt is emeli/engedi és a vontatógép rendszeréről működtetett")
        }
    }
}

function showFull()
{
    let urlS = $('#semBigImg').css('background-image')
    window.open(urlS.substring(5, urlS.length-2))
}

$(document).on('hidden.bs.modal', '#seModal', function (event)
{ $('#moreModal').modal('show');});

// Product details handling
function showProductDetails(productIndex) {
    const products = [
        {
            title: "TURBOJET Öntöződobok",
            description: "Professzionális öntöződobok a mezőgazdasági öntözéshez",
            images: [
                "Assets/turbojet-1.jpg",
                "Assets/turbojet-2.jpg",
                "Assets/turbojet-3.jpg",
                "Assets/turbojet-4.jpg"
            ],
            details: [
                "Extra vastag KPE öntözőcső",
                "Kiváló ellenálló képesség",
                "Versenyképes ár",
                "Több éves fejlesztés"
            ]
        },
        {
            title: "JET Vízágyúk",
            description: "Hatékony vízágyúk a precíziós öntözéshez",
            images: [
                "Assets/jet-1.jpg",
                "Assets/jet-2.jpg",
                "Assets/jet-3.jpg",
                "Assets/jet-4.jpg"
            ],
            details: [
                "Precíziós vízszórás",
                "Könnyű kezelhetőség",
                "Tartós anyagok",
                "Hatékony vízhasználat"
            ]
        },
        {
            title: "KPE Csövek",
            description: "Kiváló minőségű öntözőcsövek",
            images: [
                "Assets/kpe-1.jpg",
                "Assets/kpe-2.jpg",
                "Assets/kpe-3.jpg",
                "Assets/kpe-4.jpg"
            ],
            details: [
                "Extra vastag fal",
                "UV ellenálló",
                "Hosszú élettartam",
                "Kiváló minőség"
            ]
        }
    ];

    const product = products[productIndex];
    
    // Update modal content
    document.getElementById('moreModalLabel').textContent = product.title;
    document.getElementById('mTxt1').textContent = product.details[0];
    document.getElementById('mTxt2').textContent = product.details[1];
    document.getElementById('mTxt3').textContent = product.details[2];
    document.getElementById('mTxt4').textContent = product.details[3];
    
    // Update images
    document.getElementById('mImg1').style.backgroundImage = `url(${product.images[0]})`;
    document.getElementById('mImg2').style.backgroundImage = `url(${product.images[1]})`;
    document.getElementById('mImg3').style.backgroundImage = `url(${product.images[2]})`;
    document.getElementById('mImg4').style.backgroundImage = `url(${product.images[3]})`;
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('moreModal'));
    modal.show();
}