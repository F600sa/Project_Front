import React from 'react'
import { HashLink } from 'react-router-hash-link';

export  function Comments() {
  return (
    <div class="container">
     <div class="row">
         <div class="mb-3 col-md-12">
             <label>اكتب تعليق</label>
              <textarea name="comment" class="form-control" placeholder="تعليق"/>
         </div>
         <span >
        <button className="  button-order" onClick={() => console.log('connect')}>&nbsp;  علق  &nbsp;</button>
       </span>
          </div>
          
    <div class="col-md-12">
        <div class="media g-mb-30 media-comment">
            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Image Description"/>
            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
              <div class="g-mb-15">
                <h5 class="h5 g-color-gray-dark-v1 mb-0">محمد</h5>
                <span class="g-color-gray-dark-v4 g-font-size-12">من 3 ايام</span>
              </div>
        
              <p>حضرت سباق لهذا الجمل كان وكان وكان .</p>
        
              <ul class="list-inline d-sm-flex my-0">
       
                <li class="list-inline-item ml-auto">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                    رد
                  </a>
                </li>
              </ul>
            </div>
        </div>
    </div>
</div>
 
  )
}
