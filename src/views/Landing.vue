<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Plakalık Tasarım Merkezi, Hoş Geldiniz</h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid ipsa corrupti quasi harum. Unde eum necessitatibus, labore, optio voluptate rem eos debitis sit deleniti nemo animi ipsa aliquid non.
            </h4>
            <br />
            <md-button
              href="https://api.whatsapp.com/send?phone=905301393342&amp;text=Merhaba,plakalık siparişi vermek istiyorum!"
              class="md-success md-lg "
              target="_blank"
              ><i class="fab fa-whatsapp"></i>İletişime Geçelim!</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">PLAKALIK TASARIMI YAPALIM </h2>
              <h5 class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis dolore voluptatibus velit veritatis totam, quibusdam error vero pariatur dolor hic et libero odio delectus labore, quo quisquam quasi sunt?
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class = "container-fluid my">
 
<div class="row">
  
  <div align="center" class="col">
    <img class="card-img-top  " src="../assets/bos-plaka.png" alt="Plaka">
    </div>
    <div class="w-100"></div>
    <div align="left" class="col bla3">
    <b-avatar  v-if="show" variant="null" size="4em" class="pad align-baseline" >
   
       <img v-bind:src="pictureindex "  v-bind:alt="pictureindex">
      </b-avatar>
     
    <pre v-bind:style="[form]" v-if="!show" class="mt-4  center example">{{ form.text }}</pre>
  </div>
  
  <div class="col bla center example">

    <pre v-if="show3" v-bind:style="[form]"  class="mt-4 center example">{{ form.text }}</pre>

    <pre v-if="show4" v-bind:style="[form]"  class="mt-4 text-light center example">ÖRNEK PLAKA YAZISI</pre>
    
    </div>
  
    
 
  <div align="right" class="col bla4">
    <b-avatar v-if="show2 " variant="null" size="4em" class="pad align-baseline" >  
       <img v-bind:src="pictureindex2"  v-bind:alt="pictureindex2">
      </b-avatar>

    <pre  v-if="!show2" v-bind:style="[form]" class="mt-4  center example">{{ form.text }}</pre>
  </div>


  <div class="w-100"></div>
  <h5></h5>
 <transition name="ani" appear>
  <div align="right" class="col ">
    <div>
  <b-button v-b-modal.modal-1 size="sm" pill>Sol Şekil Seçiniz</b-button>
  <b-modal  id="modal-1" title="Sol Şekil Seçiniz">
     <b-avatar @click="index1=getIndex(index), show7=false" v-for="(pic,index) in iconTestPath"  :key="pic"  variant="null" size="4em" class="align-baseline" > 
         <img  :src="pic"  v-bind:alt="pic" >
      </b-avatar>
    <hr>
    <b-avatar v-for="(pic) in CartoonIcon"  :key="pic" v-show="index1==0"  variant="null" size="4em" class="align-baseline" > 
         <img  v-if="index1==0"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
      <b-avatar v-for="(pic) in EmoticonIcon"  :key="pic" v-show="index1==1"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==1"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in FlagIcon"  :key="pic" v-show="index1==2"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==2"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in FootballIcon"  :key="pic" v-show="index1==3"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==3"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in HeartIcon"  :key="pic" v-show="index1==4"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==4"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in HoroscopeIcon"  :key="pic" v-show="index1==5"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==5"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in ideologicalIcon"  :key="pic" v-show="index1==6"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==6"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
      
       <b-avatar v-for="(pic) in KingIcon"  :key="pic" v-show="index1==8"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==8"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in SosyalIcon"  :key="pic" v-show="index1==9"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==9"  @click="pictureindex=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in CarIcon"  :key="pic" v-show="index1==10"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==10"  @click="pictureindex=pic " :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
  </b-modal>
      </div>
  <h5></h5>
    <b-button   @click="show=false , show2=true , show3=false, form.yerlesim = 'Sol' " size="sm" pill>Sola Hizala </b-button>
  </div>
 </transition>
  
  
    <transition name="ani" appear>
  <div class="col center example">
    
    <b-form-textarea  @click="show=true,show2=true,show3=true,show4=false,show7=false , form.yerlesim = 'Orta'"
      id="textarea"
      v-model="form.text"
     
      placeholder="PLAKA YAZISI GİRİNİZ"
      class="center pchdr"
      required
      no-resize
     
    >
    </b-form-textarea>
    
    <h5></h5>
    <b-button @click="show=true,show2=true,show3=true, form.yerlesim = 'Orta'" size="sm" pill>Ortaya Hizala</b-button>
    
    </div>
    </transition>

      <transition name="ani" appear>
  <div align="left" class="col" >
      <div>
      
        <b-button v-b-modal.modal-2 size="sm" pill >Sağ Şekil Seçiniz  </b-button>    
        <div>
           <b-modal  id="modal-2" title="Sağ Şekil Seçiniz">
             <b-avatar  v-for="(pic,index) in iconTestPath" @click="index1=getIndex(index) "   :key="pic"  variant="null" size="4em" class="align-baseline" > 
         <img  :src="pic"  v-bind:alt="pic" >
      </b-avatar>
    <hr>
    <b-avatar v-for="(pic) in CartoonIcon"  :key="pic" v-show="index1==0"  variant="null" size="4em" class="align-baseline" > 
         <img  v-if="index1==0"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
      <b-avatar v-for="(pic) in EmoticonIcon"  :key="pic" v-show="index1==1"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==1"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in FlagIcon"  :key="pic" v-show="index1==2"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==2"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in FootballIcon"  :key="pic" v-show="index1==3"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==3"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in HeartIcon"  :key="pic" v-show="index1==4"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==4"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in HoroscopeIcon"  :key="pic" v-show="index1==5"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==5"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in ideologicalIcon"  :key="pic" v-show="index1==6"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==6"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
      
       <b-avatar v-for="(pic) in KingIcon"  :key="pic" v-show="index1==8"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==8"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in SosyalIcon"  :key="pic" v-show="index1==9"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==9"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
       <b-avatar v-for="(pic) in CarIcon"  :key="pic" v-show="index1==10"  variant="null" size="4em" class="align-baseline" > 
         <img v-if="index1==10"  @click="pictureindex2=pic" :src="pic"  v-bind:alt="pic" > 
      </b-avatar>
         </b-modal>
        </div>
      <h5></h5>
      </div>
     <b-button @click="show3=false, show2=false, show=true, form.yerlesim = 'Sağ'  " size="sm" pill>Sağa Hizala
     </b-button>
  </div>
 </transition>
  
</div>
  

                            <div class="w-100"></div>
                          <h5></h5>
  <transition name="ani" appear>
  <div class="col center example">
     <h5></h5>
       <li>Renk seçimi yapalım</li>
 <b-button-group >
   <b-button @click="form.color= 'white' "  size="sm" variant="dark"  pill>BEYAZ</b-button>
    <b-button @click="form.color='yellow'" size="sm" variant="warning"  pill>SARI</b-button>
    <b-button @click="form.color='red'" size="sm" variant="danger"  pill >KIRMIZI</b-button>
    <b-button @click="form.color='green'" size="sm" variant="success"  pill>YEŞİL</b-button>
    <b-button @click="form.color='blue'" size="sm" variant="primary"  pill>MAVİ</b-button>
    </b-button-group>
    </div>
     </transition>

     <transition name="ani" appear>
     <div class="col center example">
       <h5></h5>
       <li>Font seçimi yapalım</li>
 <b-button-group >
   <b-button @click="form.fontFamily='Helvetica Neue' " style="font-family:'Helvetica Neue'" size="sm" variant="dark"  pill>Neue</b-button>
   <b-button @click="form.fontFamily='Courier New'" style="font-family:'Courier New'" size="sm" variant="dark"  pill >Courier</b-button>
    <b-button @click="form.fontFamily='Arial'" style="font-family:'Arial' "  size="sm" variant="dark"  pill>Arial</b-button>
    <b-button @click="form.fontFamily='Georgia'" style="font-family:'Georgia' "  size="sm" variant="dark"  pill>Georgia </b-button>
    <b-button @click="form.fontFamily='Roboto Slab'" style="font-family:'Roboto Slab' "  size="sm" variant="dark"  pill>Roboto </b-button>

    </b-button-group>
    </div>
     </transition>

<h5></h5>
   <transition name="ani" appear>
<div class="col center example"> 
  <b-button  v-b-modal.my-modal :hide-footer="true" @click="ResimKontrol(pictureindex,pictureindex2), showsubmit=true " variant="outline-primary" pill >Tasarımı Onayla</b-button>
</div>
   </transition>

 <div class="col center example" >  
      <b-modal  :hide-footer="true" id="my-modal" >
        <b-alert v-if="form.text=='' " show variant="danger">Plaka yazısı boş olamaz.</b-alert>
        <div  v-if="form.text!==''">
            <b-form  @submit.prevent="onSubmit() , showsubmit=false"  v-show="showsubmit" @reset="onReset"  >
              <b-form-group
                id="input-group-1"
                label="Email"
                label-for="input-1"
                description="E-mail bilgilerinizi kimseyle paylaşmayacağız"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Mail adresinizi giriniz"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="İsim Soyisim:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.isimsoyisim"
                  required
                  placeholder="İsim Soy İsim Giriniz"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-5" label="Telefon numarası:" label-for="input-5">
                <b-form-input
                  id="input-5"
                  v-model="form.telefon"
                  required
                  placeholder="Telefon numarası Giriniz"
                ></b-form-input>
              </b-form-group>  

              <b-form-group id="input-group-3" label="İl:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  
                  v-model="form.ilsecim" @change="getIlce() "  
                  required>
                     <option v-if="form.ilsecim == 'Seçiniz'">Seçiniz</option>
                      <option 
                        v-for="item in iller"  
                        v-bind:key="item.il"
                      >
                        {{item.il}}
                      </option>
                </b-form-select>
              </b-form-group>

              <b-form-group id="input-group-8" label="İlçe:" label-for="input-8">
                <b-form-select
                  id="input-8"
                  v-model="form.ilce"  
                  required>
                      <option v-if="selectedIl == false">Seçiniz</option>
                        <option
                        v-for="(ilce,index) in ilceler"
                        v-bind:key="index"
                        >
                          {{ilce}}
                        </option>
                </b-form-select>
              </b-form-group>


                   <b-form-group class="mt-3" id="input-group-7" label="Açık Adres:" label-for="input-7">
                <b-form-input
                  id="input-7"
                  v-model="form.adres"
                  required
                  placeholder="Açık Adres Giriniz"
                ></b-form-input>
              </b-form-group>

             <!-- <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                  <b-form-checkbox value="me">Check me out</b-form-checkbox>
                  <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>-->

              <b-button  type="submit" variant="primary" >Siparişi Tamamla</b-button>
            </b-form>
            <h5 v-show="!showsubmit" >Siparişiniz alınmıştır, bizi tercih ettiğiniz için teşekkür ederiz.</h5>
           <!-- <b-card class="mt-3" header="Sipariş Detayı">
              
              <pre class="m-0">{{ form }}</pre>
            </b-card>-->
             
          </div>
        
       
      </b-modal>
   
    </div>


</div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Plakalık Tasarım Merkezi</h2>
              <h4 class="text-center description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tempora quae ullam explicabo rerum! Officiis quibusdam tempora aliquam obcaecati sit adipisci illo impedit doloribus, molestiae ut, ratione recusandae, molestias est?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/* eslint-disable */

import axios from "axios";

export default {
 
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg8.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      sagikon:'',
      solikon:'',
      index2:'',  
      iller:{},
      ilceler:[],
      selectedIl:false,
      bolge:[],
      nameM: null,
      emailM: null,
      messageM: null,
        text1: '',
        text2: '',
        show: false,
        show2: false,
        show3: false,
        show4: true,
        show7: false,
        index1: '',
        pictureindex:'',
        pictureindex2:'',
        errors: [],
        form: {
          email: '',
          //checked: [],
          text:'',
          color:'',
          yerlesim:'',
          solikon:'',
          sagikon:'',
          ilsecim:'Seçiniz',
          fontFamily:'',
          isimsoyisim:'',
          telefon:'',
          adres:'', 

        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show5: true,
        show6: false,
        showsubmit: true,
      
       
        iconTestPath: [require('../assets/Grup/cartoon_1.svg'),
        require('../assets/Grup/emoticon_1.svg'),
        require('../assets/Grup/flag_0.svg'),
        require('../assets/Grup/football1_1.svg'),
        require('../assets/Grup/heart_1.svg'),
        require('../assets/Grup/horoscope_1.svg'),
        require('../assets/Grup/ideological_1.svg'),
        require('../assets/Grup/kataturk_1.svg'),
        require('../assets/Grup/king_1.svg'),
        require('../assets/Grup/social_1.svg'),
        require('../assets/Grup/vehicle_1.svg'),
          
        
        ],
        CartoonIcon: [require('../assets/Grup/Cartoon/cartoon_bamm.svg'),
        require('../assets/Grup/Cartoon/cartoon_boom.svg'),
        require('../assets/Grup/Cartoon/cartoon_booo.svg'),
        require('../assets/Grup/Cartoon/cartoon_bounce.svg'),
        require('../assets/Grup/Cartoon/cartoon_crack.svg'),
        require('../assets/Grup/Cartoon/cartoon_dice.svg'),
        require('../assets/Grup/Cartoon/cartoon_fireball.svg'),
        require('../assets/Grup/Cartoon/cartoon_snap.svg'),
        require('../assets/Grup/Cartoon/cartoon_wrom.svg'),
        ],
        EmoticonIcon: [require('../assets/Grup/Emoticon/emoticon_angry.svg'),
        require('../assets/Grup/Emoticon/emoticon_anguished.svg'),
        require('../assets/Grup/Emoticon/emoticon_frowning.svg'),
        require('../assets/Grup/Emoticon/emoticon_haloface.svg'),
        require('../assets/Grup/Emoticon/emoticon_hearteyes.svg'),
        require('../assets/Grup/Emoticon/emoticon_kiss.svg'),
        require('../assets/Grup/Emoticon/emoticon_openmouth.svg'),
        require('../assets/Grup/Emoticon/emoticon_smile.svg'),
        require('../assets/Grup/Emoticon/emoticon_winking.svg'),
        ],
        FlagIcon: [require('../assets/Grup/Flag/flag_1.svg'),
        require('../assets/Grup/Flag/flag_2.svg'),
        require('../assets/Grup/Flag/flag_3.svg'),
        require('../assets/Grup/Flag/flag_4.svg'),
        require('../assets/Grup/Flag/flag_6.svg'),
        ],
        FootballIcon: [require('../assets/Grup/Football/football1_ankaragucu.svg'),
        require('../assets/Grup/Football/football1_denizlispor.svg'),
        require('../assets/Grup/Football/football1_elazigspor.svg'),
        require('../assets/Grup/Football/football1_erzurumspor.svg'),
        require('../assets/Grup/Football/football1_eskisehirspor.svg'),
        require('../assets/Grup/Football/football1_fenerbahce.svg'),
        require('../assets/Grup/Football/football1_galatasaray.svg'),
        require('../assets/Grup/Football/football1_genclerbirligi.svg'),
        require('../assets/Grup/Football/football1_goztepe.svg'),
        require('../assets/Grup/Football/football1_kasimpasa.svg'),
        require('../assets/Grup/Football/football1_konyaspor.svg'),
        require('../assets/Grup/Football/football1_malatyaspor.svg'),
        require('../assets/Grup/Football/football1_orduspor.svg'),
        require('../assets/Grup/Football/football1_sivasspor.svg'),
        require('../assets/Grup/Football/football1_trabzonspor.svg'),
        require('../assets/Grup/Football/football2_ankaragucu.svg'),
         require('../assets/Grup/Football/football2_besiktas.svg'),
        require('../assets/Grup/Football/football2_denizlispor.svg'),
        require('../assets/Grup/Football/football2_elazigspor.svg'),
        require('../assets/Grup/Football/football2_erzurumspor.svg'),
        require('../assets/Grup/Football/football2_eskisehirspor.svg'),
        require('../assets/Grup/Football/football2_fenerbahce.svg'),
        require('../assets/Grup/Football/football2_galatasaray.svg'),
        require('../assets/Grup/Football/football2_genclerbirligi.svg'),
         require('../assets/Grup/Football/football2_goztepe.svg'),
        require('../assets/Grup/Football/football2_kasimpasa.svg'),
        require('../assets/Grup/Football/football2_konyaspor.svg'),
        require('../assets/Grup/Football/football2_malatyaspor.svg'),
        require('../assets/Grup/Football/football2_orduspor.svg'),
        require('../assets/Grup/Football/football2_sivasspor.svg'),
        require('../assets/Grup/Football/football2_trabzonspor.svg'),
        require('../assets/Grup/Football/football3_ankaragucu.svg'),
        

         require('../assets/Grup/Football/football3_besiktas.svg'),
        require('../assets/Grup/Football/football3_denizlispor.svg'),
        require('../assets/Grup/Football/football3_elazigspor.svg'),
        require('../assets/Grup/Football/football3_erzurumspor.svg'),
        require('../assets/Grup/Football/football3_eskisehir.svg'),
        require('../assets/Grup/Football/football3_eskisehirspor.svg'),
        require('../assets/Grup/Football/football3_fenerbahce.svg'),
        require('../assets/Grup/Football/football3_galatasaray.svg'),
         require('../assets/Grup/Football/football3_genclerbirligi.svg'),
        require('../assets/Grup/Football/football3_goztepe.svg'),
        require('../assets/Grup/Football/football3_kasimpasa.svg'),
        require('../assets/Grup/Football/football3_konyaspor.svg'),
        require('../assets/Grup/Football/football3_malatyaspor.svg'),
        require('../assets/Grup/Football/football3_orduspor.svg'),
        require('../assets/Grup/Football/football3_sivasspor.svg'),
        require('../assets/Grup/Football/football3_trabzonspor.svg'),
         require('../assets/Grup/Football/football4_ankaragucu.svg'),
        require('../assets/Grup/Football/football4_besiktas.svg'),
        require('../assets/Grup/Football/football4_denizlispor.svg'),
        require('../assets/Grup/Football/football4_elazigspor.svg'),
        require('../assets/Grup/Football/football4_erzurumspor.svg'),
        require('../assets/Grup/Football/football4_eskisehirspor.svg'),
        require('../assets/Grup/Football/football4_fenerbahce.svg'),
        require('../assets/Grup/Football/football4_galatasaray.svg'),
         require('../assets/Grup/Football/football4_genclerbirligi.svg'),
        require('../assets/Grup/Football/football4_goztepe.svg'),
        require('../assets/Grup/Football/football4_kasimpasa.svg'),
        require('../assets/Grup/Football/football4_konyaspor.svg'),
        require('../assets/Grup/Football/football4_malatyaspor.svg'),
        require('../assets/Grup/Football/football4_orduspor.svg'),
        require('../assets/Grup/Football/football4_sivasspor.svg'),
        require('../assets/Grup/Football/football4_trabzonspor.svg'),
        ],
        HeartIcon: [require('../assets/Grup/Heart/heart_1.svg'),
        require('../assets/Grup/Heart/heart_2.svg'),
        require('../assets/Grup/Heart/heart_3.svg'),
        require('../assets/Grup/Heart/heart_4.svg'),
 
        ],
        HoroscopeIcon: [require('../assets/Grup/Horoscope/horoscope_akrep.svg'),
        require('../assets/Grup/Horoscope/horoscope_aslan.svg'),
        require('../assets/Grup/Horoscope/horoscope_balik.svg'),
        require('../assets/Grup/Horoscope/horoscope_basak.svg'),
        require('../assets/Grup/Horoscope/horoscope_boga.svg'),
        require('../assets/Grup/Horoscope/horoscope_ikizler.svg'),
        require('../assets/Grup/Horoscope/horoscope_koc.svg'),
        require('../assets/Grup/Horoscope/horoscope_kova.svg'),
        require('../assets/Grup/Horoscope/horoscope_terazi.svg'),
        require('../assets/Grup/Horoscope/horoscope_yay.svg'),
        require('../assets/Grup/Horoscope/horoscope_yengec.svg'),
        ],
        ideologicalIcon: [require('../assets/Grup/ideological/ideological_akp.svg'),
        require('../assets/Grup/ideological/ideological_bzkrt.svg'),
        require('../assets/Grup/ideological/ideological_chp.svg'),
        require('../assets/Grup/ideological/ideological_gktrk_byrk.svg'),
        require('../assets/Grup/ideological/ideological_gktrk_trk.svg'),
        require('../assets/Grup/ideological/ideological_iyi.svg'),
        require('../assets/Grup/ideological/ideological_kayi.svg'),
        require('../assets/Grup/ideological/ideological_mhp.svg'),
        require('../assets/Grup/ideological/ideological_rte.svg'),
        require('../assets/Grup/ideological/ideological_rtesiluet.svg'),
        ],
        kataturkIcon: [
        ],
        SosyalIcon: [require('../assets/Grup/Sosyal/social_facebook.svg'),
        require('../assets/Grup/Sosyal/social_foursquare.svg'),
        require('../assets/Grup/Sosyal/social_instagram.svg'),
        require('../assets/Grup/Sosyal/social_linkedin.svg'),
        require('../assets/Grup/Sosyal/social_snapchat.svg'),
        require('../assets/Grup/Sosyal/social_swarm.svg'),
        require('../assets/Grup/Sosyal/social_twitter.svg'),
        require('../assets/Grup/Sosyal/social_whatsapp.svg'),
        require('../assets/Grup/Sosyal/social_youtube.svg'),
    
     
        ],
        KingIcon: [require('../assets/Grup/king/king_1.svg'),
        require('../assets/Grup/king/king_2.svg'),
        require('../assets/Grup/king/king_3.svg'),
        require('../assets/Grup/king/king_4.svg'),
        require('../assets/Grup/king/king_5.svg'),
        require('../assets/Grup/king/king_6.svg'),
        require('../assets/Grup/king/king_7.svg'),
        require('../assets/Grup/king/king_8.svg'),
     
        ],
        CarIcon: [require('../assets/Grup/car/vehicle_alfa_romeo.svg'),
        require('../assets/Grup/car/vehicle_anadol.svg'),
        require('../assets/Grup/car/vehicle_astonmartin.svg'),
        require('../assets/Grup/car/vehicle_audi.svg'),
        require('../assets/Grup/car/vehicle_bentley.svg'),
        require('../assets/Grup/car/vehicle_bmw.svg'),
        require('../assets/Grup/car/vehicle_bugatti.svg'),
        require('../assets/Grup/car/vehicle_buick.svg'),
        require('../assets/Grup/car/vehicle_chery.svg'),
        require('../assets/Grup/car/vehicle_chevrolet.svg'),
        require('../assets/Grup/car/vehicle_citroen.svg'),
        require('../assets/Grup/car/vehicle_crysler.svg'),
        require('../assets/Grup/car/vehicle_dacia.svg'),
        require('../assets/Grup/car/vehicle_daewoo.svg'),
        require('../assets/Grup/car/vehicle_daihatsu.svg'),
        require('../assets/Grup/car/vehicle_dodge.svg'),
        require('../assets/Grup/car/vehicle_ferrari.svg'),
        require('../assets/Grup/car/vehicle_fiat.svg'),
        require('../assets/Grup/car/vehicle_ford.svg'),
        require('../assets/Grup/car/vehicle_honda.svg'),
        require('../assets/Grup/car/vehicle_hyundai.svg'),
        require('../assets/Grup/car/vehicle_ikco.svg'),
        require('../assets/Grup/car/vehicle_infinity.svg'),
        require('../assets/Grup/car/vehicle_jaguar.svg'),
        require('../assets/Grup/car/vehicle_lada.svg'),
        require('../assets/Grup/car/vehicle_lamborgini.svg'),
        require('../assets/Grup/car/vehicle_lancia.svg'),
        require('../assets/Grup/car/vehicle_linkoln.svg'),
        require('../assets/Grup/car/vehicle_lotus.svg'),
        require('../assets/Grup/car/vehicle_mazda.svg'),
        require('../assets/Grup/car/vehicle_mercedes.svg'),
        require('../assets/Grup/car/vehicle_mercury.svg'),
        require('../assets/Grup/car/vehicle_mini.svg'),
        require('../assets/Grup/car/vehicle_mitsubishi.svg'),
        require('../assets/Grup/car/vehicle_morgan.svg'),
        require('../assets/Grup/car/vehicle_moskwitsch.svg'),
        require('../assets/Grup/car/vehicle_mseries.svg'),
        require('../assets/Grup/car/vehicle_nissan.svg'),
        require('../assets/Grup/car/vehicle_oldmobile.svg'),
        require('../assets/Grup/car/vehicle_opel.svg'),
        require('../assets/Grup/car/vehicle_peugeot.svg'),
        require('../assets/Grup/car/vehicle_plymuth.svg'),
        require('../assets/Grup/car/vehicle_pontac.svg'),
        require('../assets/Grup/car/vehicle_porsh.svg'),
        require('../assets/Grup/car/vehicle_proton.svg'),
        require('../assets/Grup/car/vehicle_renault.svg'),
        require('../assets/Grup/car/vehicle_rolssoys.svg'),
        require('../assets/Grup/car/vehicle_rover.svg'),
        require('../assets/Grup/car/vehicle_saab.svg'),
        require('../assets/Grup/car/vehicle_seat.svg'),
        require('../assets/Grup/car/vehicle_skoda.svg'),
        require('../assets/Grup/car/vehicle_subaru.svg'),
        require('../assets/Grup/car/vehicle_suziki.svg'),
        require('../assets/Grup/car/vehicle_tata.svg'),
        require('../assets/Grup/car/vehicle_tesla.svg'),
        require('../assets/Grup/car/vehicle_tofas.svg'),
        require('../assets/Grup/car/vehicle_toyota.svg'),
        require('../assets/Grup/car/vehicle_volkswagen.svg'),
        require('../assets/Grup/car/vehicle_volvo.svg'),
        ],

        
    };
  },
  created() {
    this.getIl()
  },
  

  methods: {
   
  getIl() {
    axios.get('../json/il-bolge.json')
    .then(res => this.iller = res.data)
    },
    getIlce() {
      this.selectedIl = true
      this.ilceler = []
      this.bolge = []
      axios.get('../json/il-ilce.json')
      .then(res => {
        res.data.forEach(i => {
          if(this.form.ilsecim == i.il){
            this.ilceler.push(i.ilce)
            this.bolge.push(i.bolge)
          }
        })
      })
    },
    
      
    ResimKontrol(pictureindex,pictureindex2) {
      if(this.form.yerlesim == 'Orta')
      {
        this.form.sagikon = pictureindex2;
        this.form.solikon = pictureindex;
      }
      if(this.form.yerlesim == 'Sağ')
      {
        this.form.solikon = pictureindex;
        this.form.sagikon='';
      }
      if(this.form.yerlesim == 'Sol')
      {
        this.form.solikon = pictureindex2;
        this.form.sagikon = '';
      }
    },
   
      getIndex (a) {
        console.log(a)
        return  a ;
     
      },
      
      onSubmit(evt) {
      
        //evt.preventDefault()
        console.log(this.form);
        if(this.form.color=="")
        {
          this.form.color="white"
        }
        if(this.form.fontFamily=="")
        {
          this.form.fontFamily="Roboto Slab"
        }
      
        axios.post("https://berkaybolac.me/8081/", {...this.form })
        
        .then(response=>{
          console.log(response)
        })
        .catch(evt => console.log(evt))
        
        //alert(JSON.stringify(this.form))
      },
      /*onSubmitMail(e) {
        
          e.preventDefault();
          this.$axios
             .post(
                 "https://localhost:8080/",
                  querystring.stringify(this.form)
             )
             .then(res => {
                 this.sent = true;
             });
             console.log(this.post);
      },*/
     onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
 

    },

  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>



<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
img.defback{
  src: url ('../assets/1.svg') ;
}
.pad{
  margin-top: 10px;
}
textarea.pchdr{
  font-size: 20px;
}
pre.example{
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 600px) {
pre.example {

        max-width: 400px;
        font-size: 30px;
  }
textarea.pchdr{
  font-size: 25px;
  
}
 
}

@media screen and (max-width: 321px) {
	pre.example {
        width: 30px;
       
        font-size: 10px;
  }
  textarea.pchdr{
  font-size: 10px;

  
}
}

.center{
   text-align:center;
   
}
.bla3{
  margin-left:15px;
  border: solid 2px black;
  background: url(../assets/siyah.svg);
  border-bottom-left-radius: 10px ;
}
.bla4{
  margin-right:15px;
  border: solid 2px black;
  background: url(../assets/siyah.svg);
  border-bottom-right-radius:  10px;
}
.padding1
{
  padding: 15px;
}
.yazirengi1{
    color: #fff;
    z-index: 100;
}

.b-form-input:focus {
    color: #fff;
}
.bla{

  background: url(../assets/siyah.svg);

}

.bla2{
  border:0;
  background: url(../assets/siyah.svg);
  box-shadow: none;
  width: 200%;
}

.my {
  margin-top:100px;
  /*background: url(../assets/siyah.svg);*/
}

.mumy{
  width: auto;
}

.ani-enter{
  opacity: 0;
}
.ani-enter-active{
  transition: opacity 3s;

}
.ani-leave{

}
.ani-leave-active{
  transition: opacity 1s;
  opacity: 0;


}

</style>
