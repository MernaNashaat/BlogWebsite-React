import React from 'react';
const Footer = () => {
    return (
        <React.Fragment>
            <footer>
    <div class="f_wrapper">
      <div class="f_left">
        <div class="sns">
          <a href="#twitter"><i class="fab fa-twitter"></i></a>
          <a href="#facebook"><i class="fab fa-facebook-square"></i></a>
        </div>
        <ul class="f_guide">
          <li><a href="#sitemap">サイトマップ</a></li>
          <li><a href="#personalInfo">個人情報保護方針</a></li>
          <li><a href="#policy">プライバシーポリシー</a></li>
        </ul>
      </div>

      <div class="h_right">
        <h1 class="f_logo">HANIWAMAN Corp.</h1>
        <p class="copyright">&copy; Haniwaman Landing page Sample.</p>
      </div>
    </div>
  
    <div class="totop">
      <img src="https://drive.google.com/uc?export=view&id=1vtSVwlIXnVm1iLIj46en9GaJy9B-ucKT" alt="totop"/>
    </div>
  </footer>
        </React.Fragment>


      );
}
 
export default Footer;