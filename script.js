alert(`Wait!!!!! IMPORTANT:- This Code May Not Work On SoloLearn App. So, If It Doesn't Work On SoloLearn Then, You Need To Use Another App To Run This Code. You Need To Download "arWritter Free HTML editor" OR "SPCK code editor" From Google PlayStore. Please, Download One Of Them. I Know This Whole Process Will Consume Your 5 Minutes Of Valuable Time. But, Please.... This Is My Best Project Ever.... With So Much Hard Work. This Project Took My 3 Long Days. So, Please Do Watch It. You'll Love It. Now... If You're Using arWritter Free HTML Editor, Then It's So Easy To Use. Just Open The App & Paste My Code And Hit Run! But, If It is Not Working On arWritter Free HTML editor, Then I'll Tell You How To Use It On SPCK.`);

    alert(`Ok....
  1. Download SPCK Code Editor From Google PlayStore. Link ⬇️ https://play.google.com/store/apps/details?id=io.spck
  
  2. Then Open The App & Click The Menu Bar On The Top Left Corner Of The Screen.
  
  3. Then, Click The '+' Symbol. After That, Click On New Project. 
  
  4. Then, A New Screen Will Appear With Lots Of Options. Just Select HTML.
  
  5. Then, Again A New Page Will Show Up. Just Select NO CSS FRAMEWORKS.
  
  6. Then, A New Page Will Come Again. Just Click On CREATE.
  
  7. Then You'll See That 3 Files Are Made. HTML, CSS & JS.
  
  8. Just Simply Delete CSS & JS Files And Just Keep The HTML File. Bcz, I've Written The CSS & JS Inside The HTML.
  
  9. After Deleting Those 2 Files, You Have To "CLICK" On 'Index. html'.
  
  10. Then You'll See Some Already Written Code Over There. Just Erase Those Codes, Make It A Blank HTML File.
  
  11. And We Are All Set. Now, Just Copy My Code From SoloLearn And Paste It On That Empty 'Index. html' File And Hit Run.
  
  12. And BOOOOM...!`);

    alert("OK, I'm Assuming That You've Done Everything I Told You Earlier. You're Using SPCK code editor or arWritter, Right? So, Let's Begin.......             This Code Has Almost 30MB Files(Audio, Images & Fonts). So, It'll Take Some Time To Load. So, Please Have Patience & It Won't Take More Than 30s, depending On Your Internet Speed.");

    alert("Click On Everything. Everything Means Everything, Click On The Texts, Images, Icons, Buttons etc, To Enjoy The Full Effects Of This Code.");

    alert("Thanks For Clicking On This Code. Upvote & Comment If You Like It. Share If You Love It.");

    alert("ENJOY YOURSELF!!!!!!");

    onload = () => {

      "use strict"

      setTimeout(() => {
        document.querySelector('.loading').style.opacity = ".5";

        document.querySelector('.load').style.transform = "perspective(1500px) rotateX(90deg)";

        document.querySelector('.spotify').style.display = "block";
      }, 5000);
      setTimeout(() => {

        document.querySelector('.loading').style.display = "none";

        document.querySelector('.load').style.display = "none";

      }, 6000);

      /* nav toggler start */

      var p = true;

      document.querySelector(".toggler").addEventListener("click", swipe);

      function swipe() {

        if (p) {
          document.querySelector(".sidenav").style.left = "55%";

          document.querySelector(".sidenav").style.opacity = "1";

          let x = document.querySelectorAll('.rl');

          x.forEach(rl);

          function rl(el) {
            el.style.marginLeft = "10%";
          }

          p = false;

        }

        else {
          document.querySelector(".sidenav").style.left = "100%";

          document.querySelector(".sidenav").style.opacity = ".5";

          let x = document.querySelectorAll('.rl');

          x.forEach(rl);

          function rl(el) {
            el.style.marginLeft = "100%";
          }


          p = true;

        }

      }

      /* nav toggler end */

      /* music start */

      document.querySelector(".anime h1").addEventListener('click', () => {

        document.querySelector(".anime h1").classList.add("shake");

        setTimeout(() => {
          document.querySelector(".anime h1").classList.remove("shake");
        }, 1000);

      });

      var play = true;

      let mu = document.querySelectorAll('.mu');

      mu.forEach(music);

      function music(item, index) {

        item.addEventListener("click", () => {

          if (play)
          {
            document.getElementById(index).play();

            document.getElementById(index + 8).style.color = "rgb(255, 50, 0)";

            item.style.opacity = "1";

            item.style.borderRadius = "5%";


            item.classList.add('beat');

            play = false;

            if (index == 0) {
              stopb();
              stopc();
              stopd();
              stope();
              stopf();
              stopg();
              stoph();
            }

            else if (index == 1) {
              stopa();
              stopc();
              stopd();
              stope();
              stopf();
              stopg();
              stoph();
            }

            else if (index == 2) {
              stopb();
              stopa();
              stopd();
              stope();
              stopf();
              stopg();
              stoph();
            }

            else if (index == 3) {
              stopb();
              stopc();
              stopa();
              stope();
              stopf();
              stopg();
              stoph();
            }

            else if (index == 4) {
              stopb();
              stopc();
              stopd();
              stopa();
              stopf();
              stopg();
              stoph();
            }

            else if (index == 5) {
              stopb();
              stopc();
              stopd();
              stope();
              stopa();
              stopg();
              stoph();
            }

            else if (index == 6) {
              stopb();
              stopc();
              stopd();
              stope();
              stopf();
              stopa();
              stoph();
            }

            else if (index == 7) {
              stopb();
              stopc();
              stopd();
              stope();
              stopf();
              stopg();
              stopa();
            }

            function stopa() {
              document.getElementById('0').pause();

              document.getElementById('8').style.color = "black";

              document.querySelector('.a').style.opacity = ".85";

              document.querySelector('.a').style.borderRadius = "50%";

              document.querySelector('.a').classList.remove('beat');
            }

            function stopb() {
              document.getElementById('1').pause();

              document.getElementById('9').style.color = "black";

              document.querySelector('.b').style.opacity = ".85";

              document.querySelector('.b').style.borderRadius = "50%";

              document.querySelector('.b').classList.remove('beat');
            }

            function stopc() {
              document.getElementById('2').pause();

              document.getElementById('10').style.color = "black";

              document.querySelector('.c').style.opacity = ".85";

              document.querySelector('.c').style.borderRadius = "50%";

              document.querySelector('.c').classList.remove('beat');
            }

            function stopd() {
              document.getElementById('3').pause();

              document.getElementById('11').style.color = "black";

              document.querySelector('.d').style.opacity = ".85";

              document.querySelector('.d').style.borderRadius = "50%";

              document.querySelector('.d').classList.remove('beat');
            }

            function stope() {
              document.getElementById('4').pause();

              document.getElementById('12').style.color = "black";

              document.querySelector('.e').style.opacity = ".85";

              document.querySelector('.e').style.borderRadius = "50%";

              document.querySelector('.e').classList.remove('beat');
            }

            function stopf() {
              document.getElementById('5').pause();

              document.getElementById('13').style.color = "black";

              document.querySelector('.f').style.opacity = ".85";

              document.querySelector('.f').style.borderRadius = "50%";

              document.querySelector('.f').classList.remove('beat');
            }

            function stopg() {
              document.getElementById('6').pause();

              document.getElementById('14').style.color = "black";

              document.querySelector('.g').style.opacity = ".85";

              document.querySelector('.g').style.borderRadius = "50%";

              document.querySelector('.g').classList.remove('beat');
            }

            function stoph() {
              document.getElementById('7').pause();

              document.getElementById('15').style.color = "black";

              document.querySelector('.h').style.opacity = ".85";

              document.querySelector('.h').style.borderRadius = "50%";

              document.querySelector('.h').classList.remove('beat');
            }

            document.getElementById(index).addEventListener("ended", () => {

              document.getElementById(index).pause();

              document.getElementById(index + 8).style.color = "black";

              item.style.opacity = ".85";

              item.style.borderRadius = "50%";

              item.classList.remove('beat');

              play = true;

            });

          }

          else
          {
            document.getElementById(index).pause();

            document.getElementById(index + 8).style.color = "black";

            item.style.opacity = ".85";

            item.style.borderRadius = "50%";

            item.classList.remove('beat');

            play = true;

          }
        });


      }

      /* music end */

      document.querySelector('.close').addEventListener('click', () => {

        setTimeout(() => {

          document.querySelector('.speech').style.transform = "scale(0)";

          document.querySelector('.speech').style.borderRadius = "8%";

        }, 550);

        setTimeout(() => {

          document.querySelector('.sbox').style.transform = "scale(0)";

          document.querySelector('.sbox').style.borderRadius = "6%";

        }, 270);


        document.querySelector('.text').style.transform = "scale(0)";

        document.querySelector('.text').style.borderRadius = "5%";

      });

      document.querySelector('.open').addEventListener('click', () => {

        document.querySelector('.speech').style.transform = "scale(1)";

        document.querySelector('.speech').style.borderRadius = "3%";

        document.querySelector('.sbox').style.transform = "scale(1)";

        document.querySelector('.sbox').style.borderRadius = "2%";

        document.querySelector('.text').style.transform = "scale(1)";

        document.querySelector('.text').style.borderRadius = "1%";
      });


    }