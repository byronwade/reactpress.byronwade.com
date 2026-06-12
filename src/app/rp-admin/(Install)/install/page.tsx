import React from "react";
export default function InstallStep1() {
	return (
		<>
			<div className="install wp-core-ui language-chooser">
				<p id="logo">ReactPress</p>
				<form id="setup" method="post" action="?step=1">
					<label className="screen-reader-text" htmlFor="language">
						Select a default language
					</label>
					<select size={14} name="language" id="language">
						<option value="" lang="en" selected={true} data-continue="Continue" data-installed={1}>
							English (United States)
						</option>
						<option value="af" lang="af" data-continue="Gaan voort">
							Afrikaans
						</option>
						<option value="am" lang="am" data-continue="ቀጥል">
							አማርኛ
						</option>
						<option value="arg" lang="an" data-continue="Continar">
							Aragonés
						</option>
						<option value="ar" lang="ar" data-continue="المتابعة">
							العربية
						</option>
						<option value="ary" lang="ar" data-continue="المتابعة">
							العربية المغربية
						</option>
						<option value="as" lang="as" data-continue="Continue">
							অসমীয়া
						</option>
						<option value="azb" lang="az" data-continue="Continue">
							گؤنئی آذربایجان
						</option>
						<option value="az" lang="az" data-continue="Davam">
							Azərbaycan dili
						</option>
						<option value="bel" lang="be" data-continue="Працягнуць">
							Беларуская мова
						</option>
						<option value="bg_BG" lang="bg" data-continue="Напред">
							Български
						</option>
						<option value="bn_BD" lang="bn" data-continue="এগিয়ে চল.">
							বাংলা
						</option>
						<option value="bo" lang="bo" data-continue="མུ་མཐུད་དུ།">
							བོད་ཡིག
						</option>
						<option value="bs_BA" lang="bs" data-continue="Nastavi">
							Bosanski
						</option>
						<option value="ca" lang="ca" data-continue="Continua">
							Català
						</option>
						<option value="ceb" lang="ceb" data-continue="Padayun">
							Cebuano
						</option>
						<option value="cs_CZ" lang="cs" data-continue="Pokračovat">
							Čeština
						</option>
						<option value="cy" lang="cy" data-continue="Parhau">
							Cymraeg
						</option>
						<option value="da_DK" lang="da" data-continue="Fortsæt">
							Dansk
						</option>
						<option value="de_CH_informal" lang="de" data-continue="Weiter">
							Deutsch (Schweiz, Du)
						</option>
						<option value="de_DE_formal" lang="de" data-continue="Weiter">
							Deutsch (Sie)
						</option>
						<option value="de_CH" lang="de" data-continue="Weiter">
							Deutsch (Schweiz)
						</option>
						<option value="de_DE" lang="de" data-continue="Weiter">
							Deutsch
						</option>
						<option value="de_AT" lang="de" data-continue="Weiter">
							Deutsch (Österreich)
						</option>
						<option value="dsb" lang="dsb" data-continue="Dalej">
							Dolnoserbšćina
						</option>
						<option value="dzo" lang="dz" data-continue="Continue">
							རྫོང་ཁ
						</option>
						<option value="el" lang="el" data-continue="Συνέχεια">
							Ελληνικά
						</option>
						<option value="en_GB" lang="en" data-continue="Continue">
							English (UK)
						</option>
						<option value="en_AU" lang="en" data-continue="Continue">
							English (Australia)
						</option>
						<option value="en_CA" lang="en" data-continue="Continue">
							English (Canada)
						</option>
						<option value="en_NZ" lang="en" data-continue="Continue">
							English (New Zealand)
						</option>
						<option value="en_ZA" lang="en" data-continue="Continue">
							English (South Africa)
						</option>
						<option value="eo" lang="eo" data-continue="Daŭrigi">
							Esperanto
						</option>
						<option value="es_CR" lang="es" data-continue="Continuar">
							Español de Costa Rica
						</option>
						<option value="es_AR" lang="es" data-continue="Continuar">
							Español de Argentina
						</option>
						<option value="es_EC" lang="es" data-continue="Continuar">
							Español de Ecuador
						</option>
						<option value="es_PE" lang="es" data-continue="Continuar">
							Español de Perú
						</option>
						<option value="es_DO" lang="es" data-continue="Continuar">
							Español de República Dominicana
						</option>
						<option value="es_CL" lang="es" data-continue="Continuar">
							Español de Chile
						</option>
						<option value="es_UY" lang="es" data-continue="Continuar">
							Español de Uruguay
						</option>
						<option value="es_PR" lang="es" data-continue="Continuar">
							Español de Puerto Rico
						</option>
						<option value="es_CO" lang="es" data-continue="Continuar">
							Español de Colombia
						</option>
						<option value="es_GT" lang="es" data-continue="Continuar">
							Español de Guatemala
						</option>
						<option value="es_VE" lang="es" data-continue="Continuar">
							Español de Venezuela
						</option>
						<option value="es_ES" lang="es" data-continue="Continuar">
							Español
						</option>
						<option value="es_MX" lang="es" data-continue="Continuar">
							Español de México
						</option>
						<option value="et" lang="et" data-continue="Jätka">
							Eesti
						</option>
						<option value="eu" lang="eu" data-continue="Jarraitu">
							Euskara
						</option>
						<option value="fa_IR" lang="fa" data-continue="ادامه">
							فارسی
						</option>
						<option value="fa_AF" lang="fa" data-continue="ادامه">
							(فارسی (افغانستان
						</option>
						<option value="fi" lang="fi" data-continue="Jatka">
							Suomi
						</option>
						<option value="fr_FR" lang="fr" data-continue="Continuer">
							Français
						</option>
						<option value="fr_BE" lang="fr" data-continue="Continuer">
							Français de Belgique
						</option>
						<option value="fr_CA" lang="fr" data-continue="Continuer">
							Français du Canada
						</option>
						<option value="fur" lang="fur" data-continue="Continue">
							Friulian
						</option>
						<option value="fy" lang="fy" data-continue="Trochgean">
							Frysk
						</option>
						<option value="gd" lang="gd" data-continue="Lean air adhart">
							Gàidhlig
						</option>
						<option value="gl_ES" lang="gl" data-continue="Continuar">
							Galego
						</option>
						<option value="gu" lang="gu" data-continue="ચાલુ રાખવું">
							ગુજરાતી
						</option>
						<option value="haz" lang="haz" data-continue="ادامه">
							هزاره گی
						</option>
						<option value="he_IL" lang="he" data-continue="המשך">
							עִבְרִית
						</option>
						<option value="hi_IN" lang="hi" data-continue="जारी रखें">
							हिन्दी
						</option>
						<option value="hr" lang="hr" data-continue="Nastavi">
							Hrvatski
						</option>
						<option value="hsb" lang="hsb" data-continue="Dale">
							Hornjoserbšćina
						</option>
						<option value="hu_HU" lang="hu" data-continue="Folytatás">
							Magyar
						</option>
						<option value="hy" lang="hy" data-continue="Շարունակել">
							Հայերեն
						</option>
						<option value="id_ID" lang="id" data-continue="Lanjutkan">
							Bahasa Indonesia
						</option>
						<option value="is_IS" lang="is" data-continue="Áfram">
							Íslenska
						</option>
						<option value="it_IT" lang="it" data-continue="Continua">
							Italiano
						</option>
						<option value="ja" lang="ja" data-continue="次へ">
							日本語
						</option>
						<option value="jv_ID" lang="jv" data-continue="Nerusaké">
							Basa Jawa
						</option>
						<option value="ka_GE" lang="ka" data-continue="გაგრძელება">
							ქართული
						</option>
						<option value="kab" lang="kab" data-continue="Kemmel">
							Taqbaylit
						</option>
						<option value="kk" lang="kk" data-continue="Жалғастыру">
							Қазақ тілі
						</option>
						<option value="km" lang="km" data-continue="បន្ត">
							ភាសាខ្មែរ
						</option>
						<option value="kn" lang="kn" data-continue="ಮುಂದುವರಿಸು">
							ಕನ್ನಡ
						</option>
						<option value="ko_KR" lang="ko" data-continue="계속">
							한국어
						</option>
						<option value="ckb" lang="ku" data-continue="به‌رده‌وام به‌">
							كوردی‎
						</option>
						<option value="lo" lang="lo" data-continue="ຕໍ່​ໄປ">
							ພາສາລາວ
						</option>
						<option value="lt_LT" lang="lt" data-continue="Tęsti">
							Lietuvių kalba
						</option>
						<option value="lv" lang="lv" data-continue="Turpināt">
							Latviešu valoda
						</option>
						<option value="mk_MK" lang="mk" data-continue="Продолжи">
							Македонски јазик
						</option>
						<option value="ml_IN" lang="ml" data-continue="തുടരുക">
							മലയാളം
						</option>
						<option value="mn" lang="mn" data-continue="Continue">
							Монгол
						</option>
						<option value="mr" lang="mr" data-continue="सुरु ठेवा">
							मराठी
						</option>
						<option value="ms_MY" lang="ms" data-continue="Teruskan">
							Bahasa Melayu
						</option>
						<option value="my_MM" lang="my" data-continue="ဆက်လက်လုပ်ဆောင်ပါ။">
							ဗမာစာ
						</option>
						<option value="nb_NO" lang="nb" data-continue="Fortsett">
							Norsk bokmål
						</option>
						<option value="ne_NP" lang="ne" data-continue="जारी राख्नुहोस्">
							नेपाली
						</option>
						<option value="nl_NL" lang="nl" data-continue="Doorgaan">
							Nederlands
						</option>
						<option value="nl_NL_formal" lang="nl" data-continue="Doorgaan">
							Nederlands (Formeel)
						</option>
						<option value="nl_BE" lang="nl" data-continue="Doorgaan">
							Nederlands (België)
						</option>
						<option value="nn_NO" lang="nn" data-continue="Hald fram">
							Norsk nynorsk
						</option>
						<option value="oci" lang="oc" data-continue="Contunhar">
							Occitan
						</option>
						<option value="pa_IN" lang="pa" data-continue="ਜਾਰੀ ਰੱਖੋ">
							ਪੰਜਾਬੀ
						</option>
						<option value="pl_PL" lang="pl" data-continue="Kontynuuj">
							Polski
						</option>
						<option value="ps" lang="ps" data-continue="دوام ورکړه">
							پښتو
						</option>
						<option value="pt_BR" lang="pt" data-continue="Continuar">
							Português do Brasil
						</option>
						<option value="pt_AO" lang="pt" data-continue="Continuar">
							Português de Angola
						</option>
						<option value="pt_PT" lang="pt" data-continue="Continuar">
							Português
						</option>
						<option value="pt_PT_ao90" lang="pt" data-continue="Continuar">
							Português (AO90)
						</option>
						<option value="rhg" lang="rhg" data-continue="Continue">
							Ruáinga
						</option>
						<option value="ro_RO" lang="ro" data-continue="Continuă">
							Română
						</option>
						<option value="ru_RU" lang="ru" data-continue="Продолжить">
							Русский
						</option>
						<option value="sah" lang="sah" data-continue="Салҕаа">
							Сахалыы
						</option>
						<option value="snd" lang="sd" data-continue="اڳتي هلو">
							سنڌي
						</option>
						<option value="si_LK" lang="si" data-continue="දිගටම කරගෙන යන්න">
							සිංහල
						</option>
						<option value="sk_SK" lang="sk" data-continue="Pokračovať">
							Slovenčina
						</option>
						<option value="skr" lang="skr" data-continue="جاری رکھو">
							سرائیکی
						</option>
						<option value="sl_SI" lang="sl" data-continue="Nadaljuj">
							Slovenščina
						</option>
						<option value="sq" lang="sq" data-continue="Vazhdo">
							Shqip
						</option>
						<option value="sr_RS" lang="sr" data-continue="Настави">
							Српски језик
						</option>
						<option value="sv_SE" lang="sv" data-continue="Fortsätt">
							Svenska
						</option>
						<option value="sw" lang="sw" data-continue="Endelea">
							Kiswahili
						</option>
						<option value="szl" lang="szl" data-continue="Kōntynuować">
							Ślōnskŏ gŏdka
						</option>
						<option value="ta_IN" lang="ta" data-continue="தொடரவும்">
							தமிழ்
						</option>
						<option value="ta_LK" lang="ta" data-continue="தொடர்க">
							தமிழ்
						</option>
						<option value="te" lang="te" data-continue="కొనసాగించు">
							తెలుగు
						</option>
						<option value="th" lang="th" data-continue="ต่อไป">
							ไทย
						</option>
						<option value="tl" lang="tl" data-continue="Magpatuloy">
							Tagalog
						</option>
						<option value="tr_TR" lang="tr" data-continue="Devam">
							Türkçe
						</option>
						<option value="tt_RU" lang="tt" data-continue="дәвам итү">
							Татар теле
						</option>
						<option value="tah" lang="ty" data-continue="Continue">
							Reo Tahiti
						</option>
						<option value="ug_CN" lang="ug" data-continue="داۋاملاشتۇرۇش">
							ئۇيغۇرچە
						</option>
						<option value="uk" lang="uk" data-continue="Продовжити">
							Українська
						</option>
						<option value="ur" lang="ur" data-continue="جاری رکھیں">
							اردو
						</option>
						<option value="uz_UZ" lang="uz" data-continue="Davom etish">
							O‘zbekcha
						</option>
						<option value="vi" lang="vi" data-continue="Tiếp tục">
							Tiếng Việt
						</option>
						<option value="zh_HK" lang="zh" data-continue="繼續">
							香港中文
						</option>
						<option value="zh_CN" lang="zh" data-continue="继续">
							简体中文
						</option>
						<option value="zh_TW" lang="zh" data-continue="繼續">
							繁體中文
						</option>
					</select>
					<p className="step">
						<span className="spinner" />
						<input id="language-continue" type="submit" className="button button-primary button-large" defaultValue="Continue" />
					</p>
				</form>
			</div>
		</>
	);
}

// export function InstallStep2() {
// 	return (
// 		<>
// 			<div className="install wp-core-ui">
// 				<p id="logo">ReactPress</p>
// 				<h1>Welcome</h1>
// 				<p>Welcome to the famous five-minute ReactPress installation process! Just fill in the information below and you&apos;ll be on your way to using the most extendable and powerful personal publishing platform in the world.</p>
// 				<h2>Information needed</h2>
// 				<p>Please provide the following information. Do not worry, you can always change these settings later.</p>
// 				<form id="setup" method="post" action="install.php?step=2" noValidate={true}>
// 					<table className="form-table" role="presentation">
// 						<tbody>
// 							<tr>
// 								<th scope="row">
// 									<label htmlFor="weblog_title">Site Title</label>
// 								</th>
// 								<td>
// 									<input name="weblog_title" type="text" id="weblog_title" size={25} defaultValue="" />
// 								</td>
// 							</tr>
// 							<tr>
// 								<th scope="row">
// 									<label htmlFor="user_login">Username</label>
// 								</th>
// 								<td>
// 									<input name="user_name" type="text" id="user_login" size={25} defaultValue="" />
// 									<p>Usernames can have only alphanumeric characters, spaces, underscores, hyphens, periods, and the @ symbol.</p>
// 								</td>
// 							</tr>
// 							<tr className="form-field form-required user-pass1-wrap">
// 								<th scope="row">
// 									<label htmlFor="pass1">Password </label>
// 								</th>
// 								<td>
// 									<div className="wp-pwd">
// 										<input type="text" name="admin_password" id="pass1" className="regular-text strong" autoComplete="new-password" data-reveal={1} data-pw="DxpeGEKIT#$h3&hLQT" aria-describedby="pass-strength-result" />
// 										<button type="button" className="button wp-hide-pw" data-start-masked={0} data-toggle={0} aria-label="Hide password" style={{ display: "inline-block" }}>
// 											<span className="dashicons dashicons-hidden" />
// 											<span className="text">Hide</span>
// 										</button>
// 										<div id="pass-strength-result" aria-live="polite" className="strong">
// 											Strong
// 										</div>
// 									</div>
// 									<p>
// 										<span className="description important">
// 											<strong>Important:</strong>
// 											You will need this password to log&nbsp;in. Please store it in a secure location.
// 										</span>
// 									</p>
// 								</td>
// 							</tr>
// 							<tr className="form-field form-required user-pass2-wrap hide-if-js" style={{ display: "none" }}>
// 								<th scope="row">
// 									<label htmlFor="pass2">
// 										Repeat Password <span className="description">(required)</span>
// 									</label>
// 								</th>
// 								<td>
// 									<input name="admin_password2" type="password" id="pass2" autoComplete="new-password" />
// 								</td>
// 							</tr>
// 							<tr className="pw-weak" style={{ display: "none" }}>
// 								<th scope="row">Confirm Password</th>
// 								<td>
// 									<label>
// 										<input type="checkbox" name="pw_weak" className="pw-checkbox" />
// 										Confirm use of weak password
// 									</label>
// 								</td>
// 							</tr>
// 							<tr>
// 								<th scope="row">
// 									<label htmlFor="admin_email">Your Email</label>
// 								</th>
// 								<td>
// 									<input name="admin_email" type="email" id="admin_email" size={25} defaultValue="" />
// 									<p>Double-check your email address before continuing.</p>
// 								</td>
// 							</tr>
// 							<tr>
// 								<th scope="row">Search engine visibility</th>
// 								<td>
// 									<fieldset>
// 										<legend className="screen-reader-text">
// 											<span>Search engine visibility </span>
// 										</legend>
// 										<label htmlFor="blog_public">
// 											<input name="blog_public" type="checkbox" id="blog_public" defaultValue={0} />
// 											Discourage search engines from indexing this site
// 										</label>
// 										<p className="description">It is up to search engines to honor this request.</p>
// 									</fieldset>
// 								</td>
// 							</tr>
// 						</tbody>
// 					</table>
// 					<p className="step">
// 						<input type="submit" name="Submit" id="submit" className="button button-large" defaultValue="Install ReactPress" />
// 					</p>
// 					<input type="hidden" name="language" defaultValue="" />
// 				</form>
// 			</div>
// 		</>
// 	);
// }

// export function InstallSuccess() {
// 	return (
// 		<>
// 			<div className="install wp-core-ui">
// 				<p id="logo">ReactPress</p>
// 				<h1>Success!</h1>
// 				<p>ReactPress has been installed. Thank you, and enjoy!</p>
// 				<table className="form-table install-success">
// 					<tbody>
// 						<tr>
// 							<th>Username</th>
// 							<td>byronwade</td>
// 						</tr>
// 						<tr>
// 							<th>Password</th>
// 							<td>
// 								<p>
// 									<em>Your chosen password.</em>
// 								</p>
// 							</td>
// 						</tr>
// 					</tbody>
// 				</table>
// 				<p className="step">
// 					<a href="http://74.207.229.188/wp-login.php" className="button button-large">
// 						Log In
// 					</a>
// 				</p>
// 			</div>
// 		</>
// 	);
// }

// export function InstalledAlready() {
// 	return (
// 		<>
// 			<div className="install wp-core-ui">
// 				<p id="logo">ReactPress</p>
// 				<h1>Already Installed</h1>
// 				<p>You appear to have already installed ReactPress. To reinstall please clear your old database tables first.</p>
// 				<p className="step">
// 					<a href="http://74.207.229.188/wp-login.php" className="button button-large">
// 						Log In
// 					</a>
// 				</p>
// 			</div>
// 		</>
// 	);
// }

// export default function Install() {
// 	return (
// 		<>
// 			<InstallStep1 />
// 			<InstallStep2 />
// 			<InstallSuccess />
// 			<InstalledAlready />
// 		</>
// 	);
// }
