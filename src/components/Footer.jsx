import React from 'react';
import Input from '@material-ui/core/Input';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Checkbox from '@material-ui/core/Checkbox';
import CallMadeIcon from '@material-ui/icons/CallMade';

const Footer = () =>{
    return (
        <>
        <div className="footer">
        <footer class="footer">
<div class="container">
<div class="row">
<div class=" col-sm-4 col-md mx-5 col-6 col">
<h6 class="headin5_amrc col_white_amrc pt2"><Input placeholder="Email Address" className="input" /></h6>

<p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
</div>



<div class=" col-sm-4 col-md  col-6 col">
<h6 class="headin5_amrc col_white_amrc pt2">Order and Support</h6>
<hr className="setWidth" />

<ul class="footer_ul_amrc">
<li><a href="">Contact us<CallMadeIcon className="callmadeicon" /></a></li>
<li><a href="">FAQs<CallMadeIcon className="callmadeicon" /></a></li>
<li><a href="">Delivery and returns<CallMadeIcon className="callmadeicon" /></a></li>
<li><a href="">Terms and Condition</a></li>
</ul>
</div>


<div class=" col-sm-4 col-md  col-6 col">
<h6 class="headin5_amrc col_white_amrc pt2">Services</h6>
<hr className="setWidth" />

<ul class="footer_ul_amrc">
<li><a href="">Live assistance</a></li>
<li><a href="">Corporate gifts</a></li>
<li><a href="">Facial appointments</a></li>
</ul>

</div>



<div class=" col-sm-4 col-md  col-6 col">
<h6 class="headin5_amrc col_white_amrc pt2">Location Preference</h6>
<hr className="setWidth" />

<ul class="footer_ul_amrc">
<li><a href="">Shipping: Hong Kong(S.A.R)</a></li>
<li><a href="">Language: English</a></li>
</ul>
</div>
</div>


<div class="container ">
<div class="row">

<div class=" col-sm-4 col-md  col-6 col">
<h6 class="headin5_amrc col_white_amrc pt2">Sustainability</h6>
<hr className="increwidth" />
<p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
</div>


<div class=" col-sm-4 col-md  col-6 col">
<h6 class="headin5_amrc col_white_amrc pt2">About</h6>
<hr />

<ul class="footer_ul_amrc">
<li><a href="">Our story</a></li>
<li><a href="">Foundation<CallMadeIcon className="callmadeicon" /></a></li>
<li><a href="">Careers</a></li>
<li><a href="">Privacy Policy</a></li>
<li><a href="">Accessibility</a></li>

</ul>

</div>


<div class=" col-sm-4 col-md  col-12 col">
<h6 class="headin5_amrc col_white_amrc pt2">Social media</h6>
<hr />

<ul class="footer_ul2_amrc">
<li><a href="#"><i class="fab fa-twitter fleft padding-right"></i>Instagram<CallMadeIcon className="callmadeicon" /></a></li>
<li><a href="#"><i class="fab fa-twitter fleft padding-right"></i>Twitter<CallMadeIcon  className="callmadeicon" /></a></li>
<li><a href="#"><i class="fab fa-twitter fleft padding-right"></i>Linkedin<CallMadeIcon  className="callmadeicon" /></a></li>
<li><a href="#"><i class="fab fa-twitter fleft padding-right"></i>WeChat</a></li>
<li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> Weibo<CallMadeIcon  className="callmadeicon" /></a></li>
</ul>

</div>
</div>
</div>
</div>
<hr className="linewhite" />
<p class="text-left footerp" >© Aesop</p>
</footer>

        </div>
        
        </>
    );
};
export default Footer;