const mailing = require('./mailing');
const getUserById = require('../../controllers/usersControllers/getUserById');
const {getTripById} = require('../../controllers/tripsControllers/getTripById');
const getDriverById = require('../../controllers/driversControllers/getDriverById');
const getAdminEmails = require('../../controllers/adminControllers/getAdminEmails');


module.exports=async({id, name, surname, email, phone, dni, driverId, tripId, option})=>{

    try {
console.log(id, name, surname, email, phone, dni, driverId, tripId, option);
        const userName=name;
        
        let chofer=null;
        let trip=null;
        const adminsEmails = await getAdminEmails();

        if( option==="reserve" || option==="assignDriver" || option==="update" || option==="infoDriver"){
            trip = await getTripById(tripId);
            if(!trip)
                throw new Error(`Error al obtener viaje. ${error.message}`);
        
            if(option==="assignDriver" || option==="update" || option==="infoDriver"){
              chofer = await getDriverById(trip.driverId);
              if(!chofer)
                throw new Error(`Error al obtener chofer. ${error.message}`);
            }
        }

        let preSubject="";
        let message="";

        
        switch(option){
            case("signIn"):
                preSubject=`¡Hola ${userName}! Bienvenida/o a VAMOS!!`;
                message=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="es">
                 <head>
                  <meta charset="UTF-8">
                  <meta content="width=device-width, initial-scale=1" name="viewport">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta content="telephone=no" name="format-detection">
                  <title>Nueva plantilla</title><!--[if (mso 16)]>
                    <style type="text/css">
                    a {text-decoration: none;}
                    </style>
                    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                  <style type="text/css">
                #outlook a {
                    padding:0;
                }
                .es-button {
                    mso-style-priority:100!important;
                    text-decoration:none!important;
                }
                a[x-apple-data-detectors] {
                    color:inherit!important;
                    text-decoration:none!important;
                    font-size:inherit!important;
                    font-family:inherit!important;
                    font-weight:inherit!important;
                    line-height:inherit!important;
                }
                .es-desk-hidden {
                    display:none;
                    float:left;
                    overflow:hidden;
                    width:0;
                    max-height:0;
                    line-height:0;
                    mso-hide:all;
                }
                [data-ogsb] .es-button.es-button-1705694623085 {
                    padding:5px 10px!important;
                }
                @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
                @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
                </style>
                 </head>
                 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
                  <div dir="ltr" class="es-wrapper-color" lang="es" style="background-color:#F6F6F6"><!--[if gte mso 9]>
                            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                <v:fill type="tile" color="#f6f6f6"></v:fill>
                            </v:background>
                        <![endif]-->
                   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
                     <tr>
                      <td valign="top" style="padding:0;Margin:0">
                       <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">¡Hola ${userName}!</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Te damos la bienvenida a</p></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ecssifo.stripocdn.email/content/guids/CABINET_e504a23cc291e8e474688bd9bafbf7c1747dff40975be814891c6dd27f4bb032/images/logovamos600pxceleste.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="560"></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Visitá nuestra web para conocer nuestras ofertas de traslado</p></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#2cb543;background:#009ed1;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://vamos.com" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;display:inline-block;background:#009ed1;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center;padding:10px 20px 10px 20px;mso-padding-alt:0;mso-border-alt:10px solid #009ed1">Ir a la WEB</a></span></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:20px;Margin:0;font-size:0">
                                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr>
                                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#2cb543;background:#31cb4b;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="" class="es-button es-button-1705694623085" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#31CB4B;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:5px 10px;mso-padding-alt:0;mso-border-alt:10px solid #31CB4B"><!--[if !mso]><!-- --><img src="https://ecssifo.stripocdn.email/content/guids/CABINET_e504a23cc291e8e474688bd9bafbf7c1747dff40975be814891c6dd27f4bb032/images/pngwa.png" alt="icon" width="20" style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-right:8px" align="absmiddle"><!--<![endif]-->Consultas</a></span></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:20px;Margin:0;font-size:0">
                                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr>
                                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table>
                  </div>
                 </body>
                </html>`; //Ver HTML
                break;
            case("reserve"):
                bbc=[...adminsEmails, email],
                preSubject=`VAMOS!! ${userName} su reserva se ha registrado.`,
                message=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="es">
                 <head>
                  <meta charset="UTF-8">
                  <meta content="width=device-width, initial-scale=1" name="viewport">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta content="telephone=no" name="format-detection">
                  <title>Empty template</title><!--[if (mso 16)]>
                    <style type="text/css">
                    a {text-decoration: none;}
                    </style>
                    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                  <style type="text/css">
                #outlook a {
                  padding:0;
                }
                .es-button {
                  mso-style-priority:100!important;
                  text-decoration:none!important;
                }
                a[x-apple-data-detectors] {
                  color:inherit!important;
                  text-decoration:none!important;
                  font-size:inherit!important;
                  font-family:inherit!important;
                  font-weight:inherit!important;
                  line-height:inherit!important;
                }
                .es-desk-hidden {
                  display:none;
                  float:left;
                  overflow:hidden;
                  width:0;
                  max-height:0;
                  line-height:0;
                  mso-hide:all;
                }
                @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } .h-auto { height:auto!important } }
                @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
                </style>
                 </head>
                 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
                  <div dir="ltr" class="es-wrapper-color" lang="es" style="background-color:#F6F6F6"><!--[if gte mso 9]>
                      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#f6f6f6"></v:fill>
                      </v:background>
                    <![endif]-->
                   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
                     <tr>
                      <td valign="top" style="padding:0;Margin:0">
                       <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ecssifo.stripocdn.email/content/guids/CABINET_4a838473f1651a7dbd3ac2bb1b173132bdf1003982adeb8a70797279f860d813/images/logovamos600pxceleste.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="170"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:20px;Margin:0;font-size:0">
                                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr>
                                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">¡Su reserva se ha registrado correctamente!&nbsp;</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                               <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px">id del viaje: ${tripId}.&nbsp;</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px">Fecha: ${trip.date} - Hora: ${trip.hour}hs.&nbsp;</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                               <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:270px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px">Origen: ${trip.origin}.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px">Destino: ${trip.destination}.</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" bgcolor="#009ED1" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#ffffff;font-size:14px">&nbsp;A la brevedad se le informará su chofer asignado.</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;display:none"></td>
                                     </tr>
                                   </table></td>
                                  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;display:none"></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="" target="_blank" hidden>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                                style="height:31px; v-text-anchor:middle; width:121px" arcsize="16%" stroke="f"  fillcolor="#31cb4b">
                    <w:anchorlock></w:anchorlock>
                    <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:11px; font-weight:400; line-height:11px;  mso-text-raise:1px'>Consultas</center>
                  </v:roundrect></a>
                <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#2cb543;background:#31cb4b;border-width:0px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href="" class="es-button es-button-1705710837716" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#31CB4B;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:5px 10px;mso-padding-alt:0;mso-border-alt:10px solid #31cb4b"><img src="https://ecssifo.stripocdn.email/content/guids/CABINET_4a838473f1651a7dbd3ac2bb1b173132bdf1003982adeb8a70797279f860d813/images/pngwa.png" alt="icon" width="20" style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-right:8px" align="absmiddle">Consultas</a></span><!--<![endif]--></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table>
                  </div>
                 </body>
                </html>
                        `
                break;
            case("assignDriver"):
                bbc=[email, chofer.email],
                preSubject=`VAMOS!! ${userName}, se ha asignado un chofer para su viaje.`,
                message=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="es">
                 <head>
                  <meta charset="UTF-8">
                  <meta content="width=device-width, initial-scale=1" name="viewport">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta content="telephone=no" name="format-detection">
                  <title>Empty template</title><!--[if (mso 16)]>
                    <style type="text/css">
                    a {text-decoration: none;}
                    </style>
                    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                  <style type="text/css">
                #outlook a {
                  padding:0;
                }
                .es-button {
                  mso-style-priority:100!important;
                  text-decoration:none!important;
                }
                a[x-apple-data-detectors] {
                  color:inherit!important;
                  text-decoration:none!important;
                  font-size:inherit!important;
                  font-family:inherit!important;
                  font-weight:inherit!important;
                  line-height:inherit!important;
                }
                .es-desk-hidden {
                  display:none;
                  float:left;
                  overflow:hidden;
                  width:0;
                  max-height:0;
                  line-height:0;
                  mso-hide:all;
                }
                [data-ogsb] .es-button.es-button-1705711803403 {
                  padding:5px 10px!important;
                }
                @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } .h-auto { height:auto!important } }
                @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
                </style>
                 </head>
                 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
                  <div dir="ltr" class="es-wrapper-color" lang="es" style="background-color:#F6F6F6"><!--[if gte mso 9]>
                      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#f6f6f6"></v:fill>
                      </v:background>
                    <![endif]-->
                   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
                     <tr>
                      <td valign="top" style="padding:0;Margin:0">
                       <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ecssifo.stripocdn.email/content/guids/CABINET_4a838473f1651a7dbd3ac2bb1b173132bdf1003982adeb8a70797279f860d813/images/logovamos600pxceleste.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="170"></td>
                                     </tr>
                                     <tr>
                                      <td align="left" style="padding:20px;Margin:0;font-size:0">
                                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr>
                                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>¡Hola ${userName}! Su chofer ha sido asignado.</strong></p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                               <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>id del viaje</u>: ${tripId}.&nbsp;</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Fecha</u>: ${trip.date} - Hora: ${trip.hour}hs.&nbsp;</p></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:20px;Margin:0;font-size:0">
                                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr>
                                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                               <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:270px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Origen</u>: ${trip.origin}.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Destino</u>: ${trip.destination}.</p></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:20px;Margin:0;font-size:0">
                                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr>
                                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><strong>Datos del chofer:</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Nombre</u>: ${chofer.name}.&nbsp;</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Apellido</u>: ${chofer.surname}.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Tel.</u>: ${chofer.phone}.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:270px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><strong>Datos del vehículo:&nbsp;&nbsp;</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Vehiculo</u>: ${chofer.carType}.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Modelo</u>: ${chofer.carModel}.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Patente</u>: ${chofer.carPatent}.</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="https://vamos.com" target="_blank" hidden>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://vamos.com" 
                                style="height:29px; v-text-anchor:middle; width:112px" arcsize="17%" stroke="f"  fillcolor="#009ed1">
                    <w:anchorlock></w:anchorlock>
                    <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:10px; font-weight:400; line-height:10px;  mso-text-raise:1px'>Ir a la web</center>
                  </v:roundrect></a>
                <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#009ed1;background:#009ed1;border-width:0px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href="https://vamos.com" class="es-button es-button-1705711803403" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#009ed1;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:5px 10px;mso-padding-alt:0;mso-border-alt:10px solid #009ED1">Ir a la web</a></span><!--<![endif]--></td>
                                     </tr>
                                   </table></td>
                                  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;display:none"></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="" target="_blank" hidden>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                                style="height:31px; v-text-anchor:middle; width:121px" arcsize="16%" stroke="f"  fillcolor="#31cb4b">
                    <w:anchorlock></w:anchorlock>
                    <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:11px; font-weight:400; line-height:11px;  mso-text-raise:1px'>Consultas</center>
                  </v:roundrect></a>
                <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#2cb543;background:#31cb4b;border-width:0px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href="" class="es-button es-button-1705710837716" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#31CB4B;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:5px 10px;mso-padding-alt:0;mso-border-alt:10px solid #31cb4b"><img src="https://ecssifo.stripocdn.email/content/guids/CABINET_4a838473f1651a7dbd3ac2bb1b173132bdf1003982adeb8a70797279f860d813/images/pngwa.png" alt="icon" width="20" style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-right:8px" align="absmiddle">Consultas</a></span><!--<![endif]--></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table>
                  </div>
                 </body>
                </html>
                        `            
                break;
            case("update"):
                preSubject=`VAMOS!! ${userName}, se ha registrado una modificación en su viaje ${trip.origin} - ${trip.destination}.`,
                message=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="es">
                
                <head>
                    <meta charset="UTF-8">
                    <meta content="width=device-width, initial-scale=1" name="viewport">
                    <meta name="x-apple-disable-message-reformatting">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta content="telephone=no" name="format-detection">
                    <title>Empty template</title>
                    <!--[if (mso 16)]>
                    <style type="text/css">
                    a {text-decoration: none;}
                    </style>
                    <![endif]-->
                    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
                    <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                    <style type="text/css">
                        #outlook a {
                            padding: 0;
                        }
                
                        .es-button {
                            mso-style-priority: 100 !important;
                            text-decoration: none !important;
                        }
                
                        a[x-apple-data-detectors] {
                            color: inherit !important;
                            text-decoration: none !important;
                            font-size: inherit !important;
                            font-family: inherit !important;
                            font-weight: inherit !important;
                            line-height: inherit !important;
                        }
                
                        .es-desk-hidden {
                            display: none;
                            float: left;
                            overflow: hidden;
                            width: 0;
                            max-height: 0;
                            line-height: 0;
                            mso-hide: all;
                        }
                
                        [data-ogsb] .es-button.es-button-1705711803403 {
                            padding: 5px 10px !important;
                        }
                
                        @media only screen and (max-width:600px) {
                
                            p,
                            ul li,
                            ol li,
                            a {
                                line-height: 150% !important
                            }
                
                            h1,
                            h2,
                            h3,
                            h1 a,
                            h2 a,
                            h3 a {
                                line-height: 120% !important
                            }
                
                            h1 {
                                font-size: 30px !important;
                                text-align: left
                            }
                
                            h2 {
                                font-size: 24px !important;
                                text-align: left
                            }
                
                            h3 {
                                font-size: 20px !important;
                                text-align: left
                            }
                
                            .es-header-body h1 a,
                            .es-content-body h1 a,
                            .es-footer-body h1 a {
                                font-size: 30px !important;
                                text-align: left
                            }
                
                            .es-header-body h2 a,
                            .es-content-body h2 a,
                            .es-footer-body h2 a {
                                font-size: 24px !important;
                                text-align: left
                            }
                
                            .es-header-body h3 a,
                            .es-content-body h3 a,
                            .es-footer-body h3 a {
                                font-size: 20px !important;
                                text-align: left
                            }
                
                            .es-menu td a {
                                font-size: 14px !important
                            }
                
                            .es-header-body p,
                            .es-header-body ul li,
                            .es-header-body ol li,
                            .es-header-body a {
                                font-size: 14px !important
                            }
                
                            .es-content-body p,
                            .es-content-body ul li,
                            .es-content-body ol li,
                            .es-content-body a {
                                font-size: 14px !important
                            }
                
                            .es-footer-body p,
                            .es-footer-body ul li,
                            .es-footer-body ol li,
                            .es-footer-body a {
                                font-size: 14px !important
                            }
                
                            .es-infoblock p,
                            .es-infoblock ul li,
                            .es-infoblock ol li,
                            .es-infoblock a {
                                font-size: 12px !important
                            }
                
                            *[class="gmail-fix"] {
                                display: none !important
                            }
                
                            .es-m-txt-c,
                            .es-m-txt-c h1,
                            .es-m-txt-c h2,
                            .es-m-txt-c h3 {
                                text-align: center !important
                            }
                
                            .es-m-txt-r,
                            .es-m-txt-r h1,
                            .es-m-txt-r h2,
                            .es-m-txt-r h3 {
                                text-align: right !important
                            }
                
                            .es-m-txt-l,
                            .es-m-txt-l h1,
                            .es-m-txt-l h2,
                            .es-m-txt-l h3 {
                                text-align: left !important
                            }
                
                            .es-m-txt-r img,
                            .es-m-txt-c img,
                            .es-m-txt-l img {
                                display: inline !important
                            }
                
                            .es-button-border {
                                display: inline-block !important
                            }
                
                            a.es-button,
                            button.es-button {
                                font-size: 18px !important;
                                display: inline-block !important
                            }
                
                            .es-adaptive table,
                            .es-left,
                            .es-right {
                                width: 100% !important
                            }
                
                            .es-content table,
                            .es-header table,
                            .es-footer table,
                            .es-content,
                            .es-footer,
                            .es-header {
                                width: 100% !important;
                                max-width: 600px !important
                            }
                
                            .es-adapt-td {
                                display: block !important;
                                width: 100% !important
                            }
                
                            .adapt-img {
                                width: 100% !important;
                                height: auto !important
                            }
                
                            .es-m-p0 {
                                padding: 0px !important
                            }
                
                            .es-m-p0r {
                                padding-right: 0px !important
                            }
                
                            .es-m-p0l {
                                padding-left: 0px !important
                            }
                
                            .es-m-p0t {
                                padding-top: 0px !important
                            }
                
                            .es-m-p0b {
                                padding-bottom: 0 !important
                            }
                
                            .es-m-p20b {
                                padding-bottom: 20px !important
                            }
                
                            .es-mobile-hidden,
                            .es-hidden {
                                display: none !important
                            }
                
                            tr.es-desk-hidden,
                            td.es-desk-hidden,
                            table.es-desk-hidden {
                                width: auto !important;
                                overflow: visible !important;
                                float: none !important;
                                max-height: inherit !important;
                                line-height: inherit !important
                            }
                
                            tr.es-desk-hidden {
                                display: table-row !important
                            }
                
                            table.es-desk-hidden {
                                display: table !important
                            }
                
                            td.es-desk-menu-hidden {
                                display: table-cell !important
                            }
                
                            .es-menu td {
                                width: 1% !important
                            }
                
                            table.es-table-not-adapt,
                            .esd-block-html table {
                                width: auto !important
                            }
                
                            table.es-social {
                                display: inline-block !important
                            }
                
                            table.es-social td {
                                display: inline-block !important
                            }
                
                            .es-desk-hidden {
                                display: table-row !important;
                                width: auto !important;
                                overflow: visible !important;
                                max-height: inherit !important
                            }
                
                            .h-auto {
                                height: auto !important
                            }
                        }
                
                        @media screen and (max-width:384px) {
                            .mail-message-content {
                                width: 414px !important
                            }
                        }
                    </style>
                </head>
                
                <body style="width:100%;font-family:arial, &apos;helvetica neue&apos;, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
                    <div dir="ltr" class="es-wrapper-color" lang="es" style="background-color:#F6F6F6">
                        <!--[if gte mso 9]>
                      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#f6f6f6"></v:fill>
                      </v:background>
                    <![endif]-->
                        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
                            <tbody>
                                <tr>
                                    <td valign="top" style="padding:0;Margin:0">
                                        <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                                            <tbody>
                                                <tr>
                                                    <td align="center" style="padding:0;Margin:0">
                                                        <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                                        <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ecssifo.stripocdn.email/content/guids/CABINET_4a838473f1651a7dbd3ac2bb1b173132bdf1003982adeb8a70797279f860d813/images/logovamos600pxceleste.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="170"></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left" style="padding:20px;Margin:0;font-size:0">
                                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>¡Hola ${userName}! Su viaje ha sufrido cambios, por favor revise la información.</strong></p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                        <!--[if mso]><table style="width:560px" cellpadding="0" 
                                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                                                        <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>id del viaje</u>: ${tripId}.&nbsp;</p>
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Fecha</u>: ${trip.date} - Hora: ${trip.hour}hs.&nbsp;</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="center" style="padding:20px;Margin:0;font-size:0">
                                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                                                        <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Origen</u>: ${trip.origin}.</p>
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Destino</u>: ${trip.destination}.</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="center" style="padding:20px;Margin:0;font-size:0">
                                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td align="center" style="padding:0;Margin:0">
                                                        <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><strong>Datos del chofer:</strong></p>
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Nombre</u>: ${chofer.name}.&nbsp;</p>
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Apellido</u>: ${chofer.surname}.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br></p>
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Tel.</u>: ${chofer.phone}.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><strong>Datos del vehículo:&nbsp;&nbsp;</strong></p>
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Vehiculo</u>: ${chofer.carType}.</p>
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Modelo</u>: ${chofer.carModel}.</p>
                                                                                                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Patente</u>: ${chofer.carPatent}.</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                                            <tbody>
                                                <tr>
                                                    <td align="center" style="padding:0;Margin:0">
                                                        <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
                                                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" style="padding:0;Margin:0" class="esd-text">
                                                                                                        <!--[if mso]><a href="https://vamos.com" target="_blank" hidden>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://vamos.com" 
                                style="height:29px; v-text-anchor:middle; width:112px" arcsize="17%" stroke="f"  fillcolor="#009ed1">
                    <w:anchorlock></w:anchorlock>
                    <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:10px; font-weight:400; line-height:10px;  mso-text-raise:1px'>Ir a la web</center>
                  </v:roundrect></a>
                <![endif]-->
                                                                                                        <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#009ed1;background:#009ed1;border-width:0px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href="https://vamos.com" class="es-button es-button-1705711803403" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#009ed1;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:5px 10px;mso-padding-alt:0;mso-border-alt:10px solid #009ED1">Ir a la web</a></span>
                                                                                                        <!--<![endif]-->
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
                                                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" style="padding:0;Margin:0;display:none"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
                                                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" style="padding:0;Margin:0;width:173px">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" style="padding:0;Margin:0" class="esd-text">
                                                                                                        <!--[if mso]><a href="" target="_blank" hidden>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                                style="height:31px; v-text-anchor:middle; width:121px" arcsize="16%" stroke="f"  fillcolor="#31cb4b">
                    <w:anchorlock></w:anchorlock>
                    <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:11px; font-weight:400; line-height:11px;  mso-text-raise:1px'>Consultas</center>
                  </v:roundrect></a>
                <![endif]-->
                                                                                                        <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#2cb543;background:#31cb4b;border-width:0px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href class="es-button es-button-1705710837716" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#31CB4B;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:5px 10px;mso-padding-alt:0;mso-border-alt:10px solid #31cb4b"><img src="https://ecssifo.stripocdn.email/content/guids/CABINET_4a838473f1651a7dbd3ac2bb1b173132bdf1003982adeb8a70797279f860d813/images/pngwa.png" alt="icon" width="20" style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-right:8px" align="absmiddle">Consultas</a></span>
                                                                                                        <!--<![endif]-->
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </body>
                
                </html>
                        `
                break;
            case("infoDriver"):
              preSubject=`VAMOS!! Hola ${chofer.name}, se le ha asignado un viaje.`,
              message=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="es">
              
              <head>
                  <meta charset="UTF-8">
                  <meta content="width=device-width, initial-scale=1" name="viewport">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta content="telephone=no" name="format-detection">
                  <title>Empty template</title>
                  <!--[if (mso 16)]>
                  <style type="text/css">
                  a {text-decoration: none;}
                  </style>
                  <![endif]-->
                  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
                  <!--[if gte mso 9]>
              <xml>
                  <o:OfficeDocumentSettings>
                  <o:AllowPNG></o:AllowPNG>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
                  <style type="text/css">
                      #outlook a {
                          padding: 0;
                      }
              
                      .es-button {
                          mso-style-priority: 100 !important;
                          text-decoration: none !important;
                      }
              
                      a[x-apple-data-detectors] {
                          color: inherit !important;
                          text-decoration: none !important;
                          font-size: inherit !important;
                          font-family: inherit !important;
                          font-weight: inherit !important;
                          line-height: inherit !important;
                      }
              
                      .es-desk-hidden {
                          display: none;
                          float: left;
                          overflow: hidden;
                          width: 0;
                          max-height: 0;
                          line-height: 0;
                          mso-hide: all;
                      }
              
                      [data-ogsb] .es-button.es-button-1705711803403 {
                          padding: 5px 10px !important;
                      }
              
                      @media only screen and (max-width:600px) {
              
                          p,
                          ul li,
                          ol li,
                          a {
                              line-height: 150% !important
                          }
              
                          h1,
                          h2,
                          h3,
                          h1 a,
                          h2 a,
                          h3 a {
                              line-height: 120% !important
                          }
              
                          h1 {
                              font-size: 30px !important;
                              text-align: left
                          }
              
                          h2 {
                              font-size: 24px !important;
                              text-align: left
                          }
              
                          h3 {
                              font-size: 20px !important;
                              text-align: left
                          }
              
                          .es-header-body h1 a,
                          .es-content-body h1 a,
                          .es-footer-body h1 a {
                              font-size: 30px !important;
                              text-align: left
                          }
              
                          .es-header-body h2 a,
                          .es-content-body h2 a,
                          .es-footer-body h2 a {
                              font-size: 24px !important;
                              text-align: left
                          }
              
                          .es-header-body h3 a,
                          .es-content-body h3 a,
                          .es-footer-body h3 a {
                              font-size: 20px !important;
                              text-align: left
                          }
              
                          .es-menu td a {
                              font-size: 14px !important
                          }
              
                          .es-header-body p,
                          .es-header-body ul li,
                          .es-header-body ol li,
                          .es-header-body a {
                              font-size: 14px !important
                          }
              
                          .es-content-body p,
                          .es-content-body ul li,
                          .es-content-body ol li,
                          .es-content-body a {
                              font-size: 14px !important
                          }
              
                          .es-footer-body p,
                          .es-footer-body ul li,
                          .es-footer-body ol li,
                          .es-footer-body a {
                              font-size: 14px !important
                          }
              
                          .es-infoblock p,
                          .es-infoblock ul li,
                          .es-infoblock ol li,
                          .es-infoblock a {
                              font-size: 12px !important
                          }
              
                          *[class="gmail-fix"] {
                              display: none !important
                          }
              
                          .es-m-txt-c,
                          .es-m-txt-c h1,
                          .es-m-txt-c h2,
                          .es-m-txt-c h3 {
                              text-align: center !important
                          }
              
                          .es-m-txt-r,
                          .es-m-txt-r h1,
                          .es-m-txt-r h2,
                          .es-m-txt-r h3 {
                              text-align: right !important
                          }
              
                          .es-m-txt-l,
                          .es-m-txt-l h1,
                          .es-m-txt-l h2,
                          .es-m-txt-l h3 {
                              text-align: left !important
                          }
              
                          .es-m-txt-r img,
                          .es-m-txt-c img,
                          .es-m-txt-l img {
                              display: inline !important
                          }
              
                          .es-button-border {
                              display: inline-block !important
                          }
              
                          a.es-button,
                          button.es-button {
                              font-size: 18px !important;
                              display: inline-block !important
                          }
              
                          .es-adaptive table,
                          .es-left,
                          .es-right {
                              width: 100% !important
                          }
              
                          .es-content table,
                          .es-header table,
                          .es-footer table,
                          .es-content,
                          .es-footer,
                          .es-header {
                              width: 100% !important;
                              max-width: 600px !important
                          }
              
                          .es-adapt-td {
                              display: block !important;
                              width: 100% !important
                          }
              
                          .adapt-img {
                              width: 100% !important;
                              height: auto !important
                          }
              
                          .es-m-p0 {
                              padding: 0px !important
                          }
              
                          .es-m-p0r {
                              padding-right: 0px !important
                          }
              
                          .es-m-p0l {
                              padding-left: 0px !important
                          }
              
                          .es-m-p0t {
                              padding-top: 0px !important
                          }
              
                          .es-m-p0b {
                              padding-bottom: 0 !important
                          }
              
                          .es-m-p20b {
                              padding-bottom: 20px !important
                          }
              
                          .es-mobile-hidden,
                          .es-hidden {
                              display: none !important
                          }
              
                          tr.es-desk-hidden,
                          td.es-desk-hidden,
                          table.es-desk-hidden {
                              width: auto !important;
                              overflow: visible !important;
                              float: none !important;
                              max-height: inherit !important;
                              line-height: inherit !important
                          }
              
                          tr.es-desk-hidden {
                              display: table-row !important
                          }
              
                          table.es-desk-hidden {
                              display: table !important
                          }
              
                          td.es-desk-menu-hidden {
                              display: table-cell !important
                          }
              
                          .es-menu td {
                              width: 1% !important
                          }
              
                          table.es-table-not-adapt,
                          .esd-block-html table {
                              width: auto !important
                          }
              
                          table.es-social {
                              display: inline-block !important
                          }
              
                          table.es-social td {
                              display: inline-block !important
                          }
              
                          .es-desk-hidden {
                              display: table-row !important;
                              width: auto !important;
                              overflow: visible !important;
                              max-height: inherit !important
                          }
              
                          .h-auto {
                              height: auto !important
                          }
                      }
              
                      @media screen and (max-width:384px) {
                          .mail-message-content {
                              width: 414px !important
                          }
                      }
                  </style>
              </head>
              
              <body style="width:100%;font-family:arial, &apos;helvetica neue&apos;, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
                  <div dir="ltr" class="es-wrapper-color" lang="es" style="background-color:#F6F6F6">
                      <!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                      <v:fill type="tile" color="#f6f6f6"></v:fill>
                    </v:background>
                  <![endif]-->
                      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
                          <tbody>
                              <tr>
                                  <td valign="top" style="padding:0;Margin:0">
                                      <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                                          <tbody>
                                              <tr>
                                                  <td align="center" style="padding:0;Margin:0">
                                                      <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                                          <tbody>
                                                              <tr>
                                                                  <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                                      <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                                                                      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ecssifo.stripocdn.email/content/guids/CABINET_4a838473f1651a7dbd3ac2bb1b173132bdf1003982adeb8a70797279f860d813/images/logovamos600pxceleste.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="170"></td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                  <td align="left" style="padding:20px;Margin:0;font-size:0">
                                                                                                      <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr>
                                                                                                                  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                  <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>¡Hola ${chofer.name}! Se le ha asignado un viaje.</strong></p>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                      <!--[if mso]><table style="width:560px" cellpadding="0" 
                                      cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                                                      <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                                                                      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>id del viaje</u>: ${tripId}.&nbsp;</p>
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Fecha</u>: ${trip.date} - Hora: ${trip.hour}hs.&nbsp;</p>
                                                                                                  </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                  <td align="center" style="padding:20px;Margin:0;font-size:0">
                                                                                                      <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr>
                                                                                                                  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                                                      <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="left" style="padding:0;Margin:0;width:270px">
                                                                                      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Origen</u>: ${trip.origin}.</p>
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Destino</u>: ${trip.destination}.</p>
                                                                                                  </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                  <td align="center" style="padding:20px;Margin:0;font-size:0">
                                                                                                      <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr>
                                                                                                                  <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if mso]></td></tr></table><![endif]-->
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                                          <tbody>
                                              <tr>
                                                  <td align="center" style="padding:0;Margin:0">
                                                      <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                                          <tbody>
                                                              <tr>
                                                                  <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                                      <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                                                      <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                                                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><strong>Datos del usuario:</strong></p>
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Nombre</u>: ${usuario.name}.&nbsp;</p>
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>Apellido</u>: ${usuario.surname}.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                                                      <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="left" style="padding:0;Margin:0;width:270px">
                                                                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td align="left" style="padding:0;Margin:0" class="esd-text">
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><strong>Datos de contacto:</strong></p>
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><strong></strong>Tel.: ${usuario.phone}.<strong></strong></p>
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><u>email</u>: ${usuario.email}.</p>
                                                                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;color:#333333;font-size:14px"><br></p>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if mso]></td></tr></table><![endif]-->
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                                          <tbody>
                                              <tr>
                                                  <td align="center" style="padding:0;Margin:0">
                                                      <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                                          <tbody>
                                                              <tr>
                                                                  <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                                      <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
                                                                      <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px">
                                                                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td align="center" style="padding:0;Margin:0" class="esd-text">
                                                                                                      <!--[if mso]><a href="https://vamos.com" target="_blank" hidden>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://vamos.com" 
                              style="height:29px; v-text-anchor:middle; width:112px" arcsize="17%" stroke="f"  fillcolor="#009ed1">
                  <w:anchorlock></w:anchorlock>
                  <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:10px; font-weight:400; line-height:10px;  mso-text-raise:1px'>Ir a la web</center>
                </v:roundrect></a>
              <![endif]-->
                                                                                                      <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#009ed1;background:#009ed1;border-width:0px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href="https://vamos.com" class="es-button es-button-1705711803403" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#009ed1;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:5px 10px;mso-padding-alt:0;mso-border-alt:10px solid #009ED1">Ir a la web</a></span>
                                                                                                      <!--<![endif]-->
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                                  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
                                                                      <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
                                                                                      <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td align="center" style="padding:0;Margin:0;display:none"></td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
                                                                      <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                                                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td align="center" style="padding:0;Margin:0" class="esd-text">
                                                                                                      <!--[if mso]><a href="" target="_blank" hidden>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                              style="height:31px; v-text-anchor:middle; width:121px" arcsize="16%" stroke="f"  fillcolor="#31cb4b">
                  <w:anchorlock></w:anchorlock>
                  <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:11px; font-weight:400; line-height:11px;  mso-text-raise:1px'>Consultas</center>
                </v:roundrect></a>
              <![endif]-->
                                                                                                      <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#2cb543;background:#31cb4b;border-width:0px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href class="es-button es-button-1705710837716" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#31CB4B;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:5px 10px;mso-padding-alt:0;mso-border-alt:10px solid #31cb4b"><img src="https://ecssifo.stripocdn.email/content/guids/CABINET_4a838473f1651a7dbd3ac2bb1b173132bdf1003982adeb8a70797279f860d813/images/pngwa.png" alt="icon" width="20" style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-right:8px" align="absmiddle">Consultas</a></span>
                                                                                                      <!--<![endif]-->
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if mso]></td></tr></table><![endif]-->
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </body>      
              </html>              
              `
            email= `${chofer.email}`
            break;            
            default:{
                userName="";
                email="";
                preSubject="";
                message="";
            }
        }

        const resultMail=await mailing(userName, email, preSubject, message);
    
        if (resultMail)
            return('Email enviado correctamente!')
    } catch (error) {
        throw new Error(`Error al enviar correo: ${error.message}`)
    }
}