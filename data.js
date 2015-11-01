/*
html codes:
http://webdesign.about.com/od/localization/l/blhtmlcodes-fr.htm

    è   \xe8
    é   \xe9
    ê   \xea
    à   \xe0
    â   \xe2
    ç   \xe7
    û   \xfb

*/
//--------------------------------------------------
var cache = "_____";
var endash = "\u2013";
//--------------------------------------------------
var ref_folder = "references/";
var audio_folder = ref_folder + "audio/";
//--------------------------------------------------
var slides2_page3 = ref_folder+"Extension_French 1_Cours 2 - page 3.jpg";
var slides2_page5 = ref_folder+"Extension_French 1_Cours 2 - page 5.jpg";
var slides2_page6 = ref_folder+"Extension_French 1_Cours 2 - page 6.jpg";
var slides2_page7 = ref_folder+"Extension_French 1_Cours 2 - page 7.jpg";
var slides2_page9 = ref_folder+"Extension_French 1_Cours 2 - page 9.jpg";
var slides2_page11 = ref_folder+"Extension_French 1_Cours 2 - page 11.jpg";
var slides2_page12 = ref_folder+"Extension_French 1_Cours 2 - page 12.jpg";
var slides2_page13 = ref_folder+"Extension_French 1_Cours 2 - page 13.jpg";
var slides2_page14 = ref_folder+"Extension_French 1_Cours 2 - page 14.jpg";
// switch to arrays to simplify ref:
var slides4_page6 = [ref_folder+"Extension_French 1_Cours 4_page 6.pptx.jpg"];
var slides4_page7 = [ref_folder+"Extension_French 1_Cours 4.pptx_page7.jpg"];
var slides4_page10 = [ref_folder+"Extension_French 1_Cours 4_page 10.pptx.jpg"];
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
var audio = {};
audio.notre = ["pronunciation_fr_notre.mp3", "pronunciation_fr_notre (1).mp3", "pronunciation_fr_notre (2).mp3", "pronunciation_fr_notre (3).mp3"];
audio.professeur = ["pronunciation_fr_professeur.mp3", "pronunciation_fr_professeur (1).mp3"];
audio.donne = ["pronunciation_fr_donne.mp3"];
audio.composition = ["pronunciation_fr_composition.mp3"];
audio.ou = ["pronunciation_fr_ou.mp3"];
audio.redaction = ["pronunciation_fr_redaction.mp3", "pronunciation_fr_redaction (1).mp3", "pronunciation_fr_redaction (2).mp3"];
audio.nous = ["pronunciation_fr_nous.mp3", "pronunciation_fr_nous (1).mp3", "pronunciation_fr_nous (2).mp3", "pronunciation_fr_nous (3).mp3"];
audio.choisissons = ["pronunciation_fr_choisissons.mp3"];
audio.un_telephone = ["pronunciation_fr_un_telephone_fixe.mp3"];
audio.pommier = ["pronunciation_fr_pommier.mp3"];
audio.ancienne = ["pronunciation_fr_ancienne.mp3", "pronunciation_fr_ancienne (1).mp3"];
audio.un_femme = ["pronunciation_fr_une_femme_mariee.mp3"];
audio.dix_sept = ["pronunciation_fr_dix-sept.mp3", "pronunciation_fr_dix-sept (1).mp3", "pronunciation_fr_dix-sept (2).mp3"];
audio.trente_neuf = ["pronunciation_fr_trente-neuf.mp3"];
audio.trente_huit = ["pronunciation_fr_trente-huit.mp3"];
audio.trente_quatre = ["pronunciation_fr_trente-quatre.mp3", "pronunciation_fr_trente-quatre (1).mp3"];
audio.un_chiffre = ["pronunciation_fr_un_chiffre.mp3"];
audio.identique = ["pronunciation_fr_identique.mp3"];
audio.ceinture = ["pronunciation_fr_ceinture.mp3", "pronunciation_fr_ceinture (1).mp3"];
audio.haut_couture = ["pronunciation_fr_haute_couture.mp3", "pronunciation_fr_haute_couture (1).mp3", "pronunciation_fr_haute_couture (2).mp3", "pronunciation_fr_haute_couture (3).mp3", "pronunciation_fr_haute_couture (4).mp3"];
audio.bouteille = ["pronunciation_fr_bouteille.mp3"];
audio.plage = ["pronunciation_fr_plage.mp3", "pronunciation_fr_plage (1).mp3", "pronunciation_fr_plage (2).mp3"];
audio.milliard = ["pronunciation_fr_milliard.mp3", "pronunciation_fr_milliard (1).mp3"];
audio.euro = ["pronunciation_fr_euro.mp3", "pronunciation_fr_euro (1).mp3", "pronunciation_fr_euro (2).mp3"];
audio.maintenant = ["pronunciation_fr_maintenant.mp3", "pronunciation_fr_maintenant (1).mp3", "pronunciation_fr_maintenant (2).mp3", "pronunciation_fr_maintenant (3).mp3", "pronunciation_fr_maintenant (4).mp3", "pronunciation_fr_maintenant (5).mp3", "pronunciation_fr_maintenant (6).mp3"];
audio.pluriel = ["pronunciation_fr_pluriel.mp3", "pronunciation_fr_le_pluriel.mp3"];
audio.ce = ["pronunciation_fr_ce.mp3", "pronunciation_fr_ce (1).mp3", "pronunciation_fr_ce (2).mp3"];
audio.marie = ["pronunciation_fr_marie.mp3", "pronunciation_fr_marie (1).mp3", "pronunciation_fr_marie (2).mp3"];
audio.juin = ["pronunciation_fr_juin.mp3", "pronunciation_fr_juin (1).mp3", "pronunciation_fr_juin (2).mp3", "pronunciation_fr_juin (3).mp3"];
audio.hiver = ["pronunciation_fr_hiver.mp3", "pronunciation_fr_hiver (1).mp3", "pronunciation_fr_hiver (2).mp3", "pronunciation_fr_hiver (3).mp3"];
audio.printemps = ["pronunciation_fr_printemps.mp3", "pronunciation_fr_printemps (1).mp3", "pronunciation_fr_printemps (2).mp3", "pronunciation_fr_printemps (3).mp3", "pronunciation_fr_printemps (4).mp3"];
audio.ete = ["pronunciation_fr_ete.mp3", "pronunciation_fr_ete (1).mp3", "pronunciation_fr_ete (2).mp3"];
audio.automne = ["pronunciation_fr_automne.mp3"];
audio.aujourd_hui = ["pronunciation_fr_aujourd'hui.mp3", "pronunciation_fr_aujourd'hui (1).mp3", "pronunciation_fr_aujourd'hui (2).mp3", "pronunciation_fr_aujourd'hui (3).mp3", "pronunciation_fr_aujourd'hui (4).mp3"];
audio.demain = ["pronunciation_fr_demain.mp3", "pronunciation_fr_demain (1).mp3"];
audio.hier = ["pronunciation_fr_hier.mp3", "pronunciation_fr_hier (1).mp3", "pronunciation_fr_hier (2).mp3"];
audio.le_poste = ["pronunciation_fr_le_poste.mp3"];
audio.la_tour_dargent = ["pronunciation_fr_la_tour_d'argent.mp3"];
audio.le_tour_de_france = ["pronunciation_fr_le_tour_de_france.mp3", "pronunciation_fr_le_tour_de_france (1).mp3"];
audio.la_poste = ["pronunciation_fr_la_poste.mp3", "pronunciation_fr_la_poste (1).mp3"];
audio.garer_la_voiture = ["pronunciation_fr_garer_la_voiture.mp3"];
audio.parfait = ["pronunciation_fr_parfait.mp3", "pronunciation_fr_parfait (1).mp3"];
//
audio.a_jeudi = ["pronunciation_fr_a_jeudi.mp3"];
audio.tournez = ["pronunciation_fr_tournez.mp3", "pronunciation_fr_tournez (1).mp3"];
audio.la_page = ["pronunciation_fr_la_page.mp3"];
audio.ouvrez = ["pronunciation_fr_ouvrez.mp3"];
audio.le_livre = ["pronunciation_fr_le_livre.mp3", "pronunciation_fr_le_livre (1).mp3"];
audio.fermez = ["pronunciation_fr_fermez.mp3"];
audio.regardez = ["pronunciation_fr_regardez.mp3"];
audio.tableau = ["pronunciation_fr_tableau.mp3", "pronunciation_fr_tableau (1).mp3", "pronunciation_fr_tableau (2).mp3"];
audio.ecrivez = ["pronunciation_fr_ecrivez.mp3"];
audio.votre_nom_ici = ["pronunciation_fr_votre_nom_ici.mp3"];
audio.a_la_semaine_prochaine = ["pronunciation_fr_a_la_semaine_prochaine.mp3", "pronunciation_fr_a_la_semaine_prochaine (1).mp3", "pronunciation_fr_a_la_semaine_prochaine (2).mp3"];
//
audio.avoir = ["pronunciation_fr_avoir.mp3", "pronunciation_fr_avoir (1).mp3", "pronunciation_fr_avoir (2).mp3", "pronunciation_fr_avoir (3).mp3", "pronunciation_fr_avoir (4).mp3", "pronunciation_fr_avoir (5).mp3", "pronunciation_fr_avoir (6).mp3"];
audio.jai = ["pronunciation_fr_j\'ai.mp3", "pronunciation_fr_j\'ai (1).mp3", "pronunciation_fr_j\'ai (2).mp3"];
audio.tu_as = ["pronunciation_fr_tu_as.mp3", "pronunciation_fr_tu_as (1).mp3"];
audio.il_a = ["pronunciation_fr_il_a.mp3"];
audio.nous_avons = ["pronunciation_fr_nous_avons.mp3", "pronunciation_fr_nous_avons (1).mp3", "pronunciation_fr_nous_avons (2).mp3", "pronunciation_fr_nous_avons (3).mp3"];
audio.vous_avez = ["pronunciation_fr_vous_avez.mp3", "pronunciation_fr_vous_avez (1).mp3"];
audio.ils_ont = ["pronunciation_fr_ils_ont.mp3", "pronunciation_fr_ils_ont (1).mp3"];
//
audio.etre = ["pronunciation_fr_etre.mp3", "pronunciation_fr_etre (1).mp3"];
audio.je_suis = ["pronunciation_fr_je_suis.mp3", "pronunciation_fr_je_suis (1).mp3", "pronunciation_fr_je_suis (2).mp3", "pronunciation_fr_je_suis (3).mp3", "pronunciation_fr_je_suis (4).mp3", "pronunciation_fr_je_suis (5).mp3"];
audio.tu_es = ["pronunciation_fr_tu_es.mp3", "pronunciation_fr_tu_es (1).mp3", "pronunciation_fr_tu_es (2).mp3", "pronunciation_fr_tu_es (3).mp3"];
audio.il_est = ["pronunciation_fr_il_est.mp3", "pronunciation_fr_il_est (1).mp3", "pronunciation_fr_il_est (2).mp3"];
audio.nous_sommes = ["pronunciation_fr_nous_sommes.mp3", "pronunciation_fr_nous_sommes (1).mp3", "pronunciation_fr_nous_sommes (2).mp3"];
audio.vous_etes = ["pronunciation_fr_vous_etes.mp3", "pronunciation_fr_vous_etes (1).mp3", "pronunciation_fr_vous_etes (2).mp3"];
audio.ils_sont = ["pronunciation_fr_ils_sont.mp3", "pronunciation_fr_ils_sont (1).mp3", "pronunciation_fr_ils_sont (2).mp3"];
//
audio.les_grands_parents = ["pronunciation_fr_les_grands-parents.mp3"];
audio.grand_pere = ["pronunciation_fr_grand-pere.mp3", "pronunciation_fr_grand-pere (1).mp3", "pronunciation_fr_grand-pere (2).mp3"];
audio.grand_mere = ["pronunciation_fr_grand-mere.mp3", "pronunciation_fr_grand-mere (1).mp3"];
audio.les_enfants = ["pronunciation_fr_les_enfants.mp3"];
audio.filles = ["pronunciation_fr_filles.mp3"];
audio.fils = ["pronunciation_fr_fils.mp3", "pronunciation_fr_fils (1).mp3", "pronunciation_fr_fils (2).mp3"];
audio.freres = ["pronunciation_fr_freres.mp3"];
audio.soeurs = ["pronunciation_fr_soeurs.mp3"];
audio.petite_fille = ["pronunciation_fr_petite-fille.mp3", "pronunciation_fr_petite-fille (1).mp3", "pronunciation_fr_petite-fille (2).mp3"];
audio.petit_fils = ["pronunciation_fr_petit-fils.mp3", "pronunciation_fr_petit-fils (1).mp3", "pronunciation_fr_petit-fils (2).mp3"];
audio.parents = ["pronunciation_fr_parents.mp3"];
audio.construisez = ["pronunciation_fr_construisez.mp3", "pronunciation_fr_construisez (1).mp3"];
audio.phrases = ["pronunciation_fr_phrases.mp3"];
audio.qui = ["pronunciation_fr_qui.mp3", "pronunciation_fr_qui (1).mp3"];
audio.ont = ["pronunciation_fr_ont.mp3"];
audio.du = ["pronunciation_fr_du.mp3", "pronunciation_fr_du (1).mp3", "pronunciation_fr_du (2).mp3", "pronunciation_fr_du (3).mp3"];
audio.sens = ["pronunciation_fr_sens.mp3"];
audio.en_utilisant = ["pronunciation_fr_en_utilisant.mp3", "pronunciation_fr_en_utilisant (1).mp3", "pronunciation_fr_en_utilisant (2).mp3"];
audio.verbes = ["pronunciation_fr_verbes.mp3"];
//
audio.quelque_chose = ["pronunciation_fr_quelque_chose.mp3", "pronunciation_fr_quelque_chose (1).mp3", "pronunciation_fr_quelque_chose (2).mp3", "pronunciation_fr_quelque_chose (3).mp3", "pronunciation_fr_quelque_chose (4).mp3"];
audio.suivantes = ["pronunciation_fr_suivantes.mp3"];
//
audio.sappeler = ["pronunciation_fr_s'appeler.mp3"];
audio.je_mappelle = ["pronunciation_fr_je_m'appelle.mp3", "pronunciation_fr_je_m'appelle (1).mp3", "pronunciation_fr_je_m'appelle (2).mp3", "pronunciation_fr_je_m'appelle (3).mp3", "pronunciation_fr_je_m'appelle (4).mp3"];
audio.tappelles = ["pronunciation_fr_tu_t'appelles.mp3", "pronunciation_fr_tu_t'appelles (1).mp3", "pronunciation_fr_tu_t'appelles (2).mp3"];
audio.il_sappelle = ["pronunciation_fr_il_s'appelle.mp3", "pronunciation_fr_il_s'appelle (1).mp3"];
audio.nous_nous_appelons = ["pronunciation_fr_nous_nous_appelons.mp3", "pronunciation_fr_nous_nous_appelons (1).mp3", "pronunciation_fr_nous_nous_appelons (2).mp3"];
audio.vous_vous_appelez = ["pronunciation_fr_vous_vous_appelez.mp3", "pronunciation_fr_vous_vous_appelez (1).mp3", "pronunciation_fr_vous_vous_appelez (2).mp3"];
audio.elles_sappellent = ["pronunciation_fr_elles_s'appellent.mp3", "pronunciation_fr_elles_s'appellent (1).mp3"];
//
audio.aimer = ["pronunciation_fr_aimer.mp3", "pronunciation_fr_aimer (1).mp3", "pronunciation_fr_aimer (2).mp3"];
audio.aime = ["pronunciation_fr_aime.mp3"];
audio.aimes = ["pronunciation_fr_aimes.mp3", "pronunciation_fr_aimes (1).mp3"];
audio.aimons = ["pronunciation_fr_aimons.mp3", "pronunciation_fr_aimons (1).mp3"];
audio.aimez = ["pronunciation_fr_aimez.mp3"];
audio.aiment = ["pronunciation_fr_aiment.mp3", "pronunciation_fr_aiment (1).mp3", "pronunciation_fr_aiment (2).mp3"];
//
audio.pratiquer = ["pronunciation_fr_pratiquer.mp3"];
audio.pratique = ["pronunciation_fr_pratique.mp3"];
audio.pratiques = ["pronunciation_fr_pratiques.mp3"];
audio.pratiquons = ["pronunciation_fr_pratiquons.mp3"];
audio.pratiquez = ["pronunciation_fr_pratiquez.mp3"];
audio.pratiquent = ["pronunciation_fr_pratiquent.mp3"];
//
audio.preferer = ["pronunciation_fr_preferer.mp3", "pronunciation_fr_preferer (1).mp3"];
audio.prefere = ["pronunciation_fr_prefere.mp3"];
audio.preferes = ["pronunciation_fr_preferes.mp3"];
audio.preferez = ["pronunciation_fr_preferez.mp3"];
audio.preferent = ["pronunciation_fr_preferent.mp3"];
//
audio.mon = ["pronunciation_fr_mon.mp3"];
audio.ma = ["pronunciation_fr_ma.mp3"];
audio.ton = ["pronunciation_fr_ton.mp3", "pronunciation_fr_ton (1).mp3", "pronunciation_fr_ton (2).mp3"];
audio.ta = ["pronunciation_fr_ta.mp3", "pronunciation_fr_ta (1).mp3", "pronunciation_fr_ta (2).mp3"];
audio.son = ["pronunciation_fr_son.mp3", "pronunciation_fr_son (1).mp3", "pronunciation_fr_son (2).mp3", "pronunciation_fr_son (3).mp3"];
audio.sa = ["pronunciation_fr_sa.mp3", "pronunciation_fr_sa (1).mp3", "pronunciation_fr_sa (2).mp3"];
audio.votre = ["pronunciation_fr_votre.mp3", "pronunciation_fr_votre (1).mp3", "pronunciation_fr_votre (2).mp3"];
audio.leur = ["pronunciation_fr_leur.mp3", "pronunciation_fr_leur (1).mp3", "pronunciation_fr_leur (2).mp3", "pronunciation_fr_leur (3).mp3"];
//
audio.mes = ["pronunciation_fr_mes.mp3", "pronunciation_fr_mes (1).mp3", "pronunciation_fr_mes (2).mp3"];
audio.tes = ["pronunciation_fr_tes.mp3", "pronunciation_fr_tes (1).mp3", "pronunciation_fr_tes (2).mp3"];
audio.ses = ["pronunciation_fr_ses.mp3"];
audio.nos = ["pronunciation_fr_nos.mp3", "pronunciation_fr_nos (1).mp3", "pronunciation_fr_nos (2).mp3"];
audio.vos = ["pronunciation_fr_vos.mp3", "pronunciation_fr_vos (1).mp3", "pronunciation_fr_vos (2).mp3"];
audio.leurs = ["pronunciation_fr_leurs.mp3", "pronunciation_fr_leurs (1).mp3", "pronunciation_fr_leurs (2).mp3"];
//
audio.janvier = ["pronunciation_fr_janvier.mp3", "pronunciation_fr_janvier (1).mp3", "pronunciation_fr_janvier (2).mp3"];
audio.fevrier = ["pronunciation_fr_fevrier.mp3", "pronunciation_fr_fevrier (1).mp3"];
audio.mars = ["pronunciation_fr_mars.mp3", "pronunciation_fr_mars (1).mp3", "pronunciation_fr_mars (2).mp3"];
audio.avril = ["pronunciation_fr_avril.mp3", "pronunciation_fr_avril (1).mp3", "pronunciation_fr_avril (2).mp3"];
audio.mai = ["pronunciation_fr_mai.mp3", "pronunciation_fr_mai (1).mp3", "pronunciation_fr_mai (2).mp3"];
audio.juillet = ["pronunciation_fr_juillet.mp3", "pronunciation_fr_juillet (1).mp3", "pronunciation_fr_juillet (2).mp3", "pronunciation_fr_juillet (3).mp3"];
audio.aout = ["pronunciation_fr_aout.mp3", "pronunciation_fr_aout (1).mp3", "pronunciation_fr_aout (2).mp3", "pronunciation_fr_aout (3).mp3", "pronunciation_fr_aout (4).mp3"];
audio.septembre = ["pronunciation_fr_septembre.mp3", "pronunciation_fr_septembre (1).mp3", "pronunciation_fr_septembre (2).mp3", "pronunciation_fr_septembre (3).mp3"];
audio.octobre = ["pronunciation_fr_octobre.mp3", "pronunciation_fr_octobre (1).mp3", "pronunciation_fr_octobre (2).mp3", "pronunciation_fr_octobre (3).mp3"];
audio.novembre = ["pronunciation_fr_novembre.mp3", "pronunciation_fr_novembre (1).mp3", "pronunciation_fr_novembre (2).mp3"];
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
function getlist(filename, topindex){
    var list = [];
    list.push(filename);
    var name = filename.substr(0, filename.length-4);
    var extension = filename.substr(filename.length-4);
    for(var i=1; i<=topindex; i++){
        list.push(name+" ("+i+")"+extension);
    }
    return list;
}
audio.decembre = getlist("pronunciation_fr_decembre.mp3", 1);
//
audio.mon_amour = getlist("pronunciation_fr_mon_amour.mp3", 1);
audio.mon_cheri = getlist("pronunciation_fr_mon_ch\xe9ri.mp3", 3);
audio.ton_ordinateur = ["pronunciation_fr_ton_ordinateur.mp3"];
audio.quel_est_ton_numero_de_telephone = ["pronunciation_fr_quel_est_ton_num\xe9ro_de_t\xe9l\xe9phone.mp3"];
audio.son_ordinateur = ["pronunciation_fr_son_ordinateur.mp3"];
audio.son_trip = ["pronunciation_fr_son_trip.mp3"];
//
audio.ma_mere = ["pronunciation_fr_ma_m\xe8re.mp3"];
audio.ma_femme = getlist("pronunciation_fr_ma_femme.mp3", 1);
audio.ta_mode = getlist("pronunciation_fr_ta_mode.mp3", 1);
audio.ta_vie = ["pronunciation_fr_ta_vie.mp3"];
audio.retourner_sa_veste = getlist("pronunciation_fr_retourner_sa_veste.mp3", 3);
audio.sa_famille = ["pronunciation_fr_sa_famille.mp3"];
//
audio.notre_sucre = getlist("pronunciation_fr_notre_sucre.mp3", 1);
audio.votre_travail = ["pronunciation_fr_votre_travail.mp3"];
audio.leur_universite = getlist("pronunciation_fr_leur_universit\xe9.mp3", 1);
//
audio.mes_favorites = ["pronunciation_fr_mes_favorites.mp3"];
audio.tes_amis = getlist("pronunciation_fr_tes_amis.mp3", 1);
audio.allumer_ses_roues = ["pronunciation_fr_allumer_ses_roues.mp3"];
audio.nos_devoirs = ["pronunciation_fr_nos_devoirs.mp3"];
audio.nos_bagages = getlist("pronunciation_fr_nos_bagages.mp3", 1);
audio.ouvrez_vos_livres = ["pronunciation_fr_ouvrez_vos_livres.mp3"];
audio.leurs_yeux = ["pronunciation_fr_leurs_yeux.mp3"];
//
audio.preferons = ["pronunciation_fr_pr\xe9f\xe9rons.mp3"];
audio.levez = ["pronunciation_fr_levez.mp3"];
audio.la_main = getlist("pronunciation_fr_la_main.mp3", 1);
audio.prenez = ["pronunciation_fr_prenez.mp3"];
audio.un_stylo = ["pronunciation_fr_un_stylo.mp3"];
//
audio.prendre = getlist("pronunciation_fr_prendre.mp3", 3);
audio.je_prends = getlist("pronunciation_fr_je_prends.mp3", 1);
audio.tu_prends = getlist("pronunciation_fr_tu_prends.mp3", 1);
audio.elle_prend = getlist("pronunciation_fr_elle_prend.mp3", 1);
audio.nous_prenons = getlist("pronunciation_fr_nous_prenons.mp3", 1);
audio.vous_prenez = getlist("pronunciation_fr_vous_prenez.mp3", 1);
audio.elles_prennent = getlist("pronunciation_fr_elles_prennent.mp3", 1);
//
audio.pourquoi = getlist("pronunciation_fr_pourquoi.mp3", 3);
audio.escroc = getlist("pronunciation_fr_escroc.mp3", 2);
audio.a = getlist("pronunciation_fr_a.mp3", 2);
audio.b = ["pronunciation_fr_b.mp3"];
audio.c = ["pronunciation_fr_c.mp3"];
audio.d = getlist("pronunciation_fr_d.mp3", 1);
audio.e = getlist("pronunciation_fr_e.mp3", 1);
audio.f = getlist("pronunciation_fr_f.mp3", 1);
audio.g = ["pronunciation_fr_g.mp3"];
audio.h = ["pronunciation_fr_h.mp3"];
audio.i = ["pronunciation_fr_i.mp3"];
audio.j = ["pronunciation_fr_j.mp3"];
audio.k = ["pronunciation_fr_k.mp3"];
audio.l = ["pronunciation_fr_l.mp3"];
audio.m = ["pronunciation_fr_m.mp3"];
audio.n = ["pronunciation_fr_n.mp3"];
audio.o = ["pronunciation_fr_o.mp3"];
audio.p = ["pronunciation_fr_p.mp3"];
audio.q = ["pronunciation_fr_q.mp3"];
audio.r = getlist("pronunciation_fr_r.mp3", 2);
audio.s = getlist("pronunciation_fr_s.mp3", 1);
audio.t = ["pronunciation_fr_t.mp3"];
audio.u = getlist("pronunciation_fr_u.mp3", 2);
audio.v = ["pronunciation_fr_v.mp3"];
audio.w = ["pronunciation_fr_w.mp3"];
audio.x = ["pronunciation_fr_x.mp3"];
audio.y = getlist("pronunciation_fr_y.mp3", 1);
audio.z = ["pronunciation_fr_z.mp3"];
audio.daccord = getlist("pronunciation_fr_d'accord.mp3", 4);
audio.donc = ["pronunciation_fr_donc.mp3"];
audio.mois = ["pronunciation_fr_mois.mp3"];
audio.preferee = ["pronunciation_fr_pr\xe9f\xe9re\xe9.mp3"];
audio.couleur = getlist("pronunciation_fr_couleur.mp3", 2);
audio.piece_de_resistance = getlist("pronunciation_fr_pi\xe8ce_de_r\xe9sistance.mp3", 1);
//--------------------------------------------------
/*
audio. = [""];
*/
//--------------------------------------------------
// prepend audio folder name
for(var set in audio){
    audio[set].forEach(function(filename,i){
        audio[set][i] = audio_folder+filename;
    });
}
//--------------------------------------------------
var data = {};
data.items = [];
function add_item(word, definition, links){
    var item ={};
    if(word) item.word = word;
    if(definition) item.definition = definition;
    if(links) item.links = links;
    data.items.push(item);
}
/*
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// words
add_item("derelict");
add_item("miasma");
add_item("deus ex machina");
add_item("cosmopolitan");
add_item("de rigueur");
add_item("raison d'\xEAtre");
add_item("in statu nascendi");
add_item("participle");
add_item("tissue");
add_item("de novo");
add_item("diploid");
add_item("affect");
//--------------------------------------------------
// dates
add_item("Freud");
add_item("Magritte");
add_item("Pollock");
add_item("Picasso");
add_item("Hegel");
add_item("Marx");
add_item("Breuer treats Anna O.");
add_item("Plato");
add_item("Aristotle");
add_item("Darwin");
add_item("de Chirico, Giorgio");
add_item("Dali", "1904"+endash+"1989");
*/
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// French
/*
add_item("how do you say ... in French?", "comment est-ce que on dit ... en fran\xe7ais ?");
add_item("what does ... mean?", "que est-ce que ... signifie ?", ["https://www.youtube.com/watch?v=lFEwiNkaLns"]);
add_item("how do you write ... ?", "comment est-ce que on \xe9crit ... ?");
add_item("how do you spell ... ?", "comment est-ce que on \xe9pelle ... ?");
add_item("can you repeat?", "est-ce que tu peux r\xe9p\xe9ter ?");
add_item("I don't understand (this word / this sentence)", "je ne comprends pas (ce mot / cette phrase)");
add_item("I have a question", "j'ai une question", ["http://forvo.com/word/j%27ai_une_question/#fr"]);
add_item("I don't know", "je ne sais pas");
add_item("student next to me", "Sheshank");
add_item("professor's name", "Guillaume");
add_item("This is "+cache+". He is wearing glasses, a yellow shirt and white shoes.", "Voila "+cache+". il porte des lunettes, une chemise jaune et des chaussures blanches");
add_item("he wears glasses", "il porte des lunettes");
add_item("shoes", "chaussures", ["http://www.linguee.fr/francais-anglais/traduction/chaussures.html"]);
add_item("yellow", "jaune");
add_item("pink", "rose", ["http://www.linguee.fr/francais-anglais/traduction/rose.html"]);
add_item("white", "blanc", ["http://forvo.com/word/blanc/#fr", "http://www.linguee.fr/francais-anglais/traduction/blanc.html"]);
add_item("wear", "porter", ["http://www.linguee.fr/francais-anglais/traduction/porter.html"]);
add_item("glasses", "lunettes");
add_item("my name is...", "je m\'appelle ...");
add_item("you're welcome", "je vous en prie", ["https://app.box.com/s/kl9mgkfafb2ncp26gsc531t98v54nrsw","http://forvo.com/word/je_vous_en_prie/"]);
add_item("what's your name?", "comment tu t'appelles?", ["https://www.youtube.com/watch?v=_Xx0THT3otw","http://forvo.com/word/comment_tu_t%C2%B4appelles%3F/#fr"]);
add_item("nice to meet you", "enchant\xe9", ["http://forvo.com/search/enchante/"]);
add_item("how are you?", "comment \xe7a va ?");
add_item("whatever", "bof");
add_item("and you?", "et toi ?");
add_item("what's her name?", "comment elle s'appelle ?");
add_item("tall", "grand", ["http://www.linguee.fr/francais-anglais/traduction/grand.html"]);
add_item("small / little", "petit", ["http://www.linguee.fr/francais-anglais/traduction/grand.html"]);
add_item("young", "jeune", ["http://www.linguee.fr/francais-anglais/traduction/jeune.html"]);
add_item("old", "\xe2g\xe9", ["http://www.linguee.fr/francais-anglais/traduction/%C3%A2g%C3%A9.html"]);
add_item("beautiful", "belle");
add_item("handsome", "beau");
add_item("ugly", "moche");
add_item("what are you wearing?", "qu'est-ce que tu portes ?");
add_item("light (of clothing)", "clair", ["http://www.linguee.fr/francais-anglais/traduction/clair.html"]);
add_item("dark (of clothing)", "fonc\xe9");
add_item("I am from ...", "je suis de ...", ["http://forvo.com/word/je_suis_de_floride/#fr"]);
add_item("I am a student (male) in french", "je suis \xe9tudiant en le fran\xe7ais", ["http://forvo.com/word/%C3%A9tudiant/#fr"]);
add_item("his name is Guillaume", "il s'appelle Guillaume");
add_item("her name is Laura", "elle s'appelle Laura");
add_item("French", "le fran\xe7ais");
add_item("English (m)", "l'anglais");
add_item("history", "l'histoire (f)", ["http://forvo.com/word/l%27histoire/#fr"]);
add_item("computer science", "l'informatique (f)");
add_item("what's your name? (formal)", "comment vous appelez-vous?", ["http://forvo.com/word/comment_vous_appelez-vous/#fr", "https://media.la.utexas.edu/fi/aud/voc/005.mp3"]);
add_item("see you tomorrow", "\xe0 demain", ["http://forvo.com/word/%C3%A0_demain/#fr"]);
add_item("woman", "femme", ["http://www.linguee.fr/francais-anglais/traduction/femme.html"]);
add_item("man", "homme", ["http://www.linguee.fr/francais-anglais/traduction/homme.html"]);
add_item("brother", "fr\xe9re", ["http://www.linguee.fr/francais-anglais/traduction/fr%C3%A8re.html"]);
add_item("table", "table", ["http://www.linguee.fr/francais-anglais/traduction/table.html"]);
add_item("chair", "chaise", ["http://www.linguee.fr/francais-anglais/traduction/chaise.html"]);
add_item("a boy", "un gar\xe7on", ["http://forvo.com/word/un_gar%C3%A7on/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
add_item("the boy", "le gar\xe7on", ["http://forvo.com/word/le_gar%C3%A7on_est_jeune/#fr", "http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en"]);
add_item("friends or some friends", "des amis", ["http://forvo.com/word/des_amis/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
add_item("a girl", "une fille", ["http://forvo.com/word/une_fille/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
add_item("the girl, the actress", "la fille, l'actrice", ["http://forvo.com/word/la_fille/#fr", "http://forvo.com/word/l%27actrice/#fr", "http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en"]);
add_item("socks", "chaussettes", ["http://forvo.com/word/chaussettes/#fr"]);
add_item("hair", "cheveux", ["http://forvo.com/word/cheveux/#fr", "http://www.linguee.fr/francais-anglais/traduction/cheveux.html"]);
add_item("right", "droit", ["http://www.linguee.fr/francais-anglais/traduction/droit.html"]);
add_item("left", "gauche", ["http://www.linguee.fr/francais-anglais/traduction/gauche.html"]);
add_item("98", "quatre vingt dix huit", ["http://forvo.com/word/quatre_vingt_dix_huit/#fr"]);
add_item("21", "vingt et un", ["http://forvo.com/word/vingt_et_un/#fr"]);
add_item("26", "vingt-six", ["http://forvo.com/word/vingt-six/#fr"]);
add_item("91", "quatre-vingt-onze", ["http://forvo.com/word/quatre-vingt-onze/#fr"]);
*/
add_item("a", "a", audio.a);
add_item("b", "b", audio.b);
add_item("c", "c", audio.c);
add_item("d", "d", audio.d);
add_item("e", "e", audio.e);
add_item("f", "f", audio.f);
add_item("g", "g", audio.g);
add_item("h", "h", audio.h);
add_item("i", "i", audio.i);
add_item("j", "j", audio.j);
add_item("k", "k", audio.k);
add_item("l m n o p", "l m n o p", [].concat(audio.l, audio.m, audio.n, audio.o, audio.p));
add_item("q", "q", audio.q);
add_item("r", "r", audio.r);
add_item("s", "s", audio.s);
add_item("t", "t", audio.t);
add_item("u", "u", audio.u);
add_item("v", "v", audio.v);
add_item("w", "w", audio.w);
add_item("x", "x", audio.x);
add_item("y", "y", audio.y);
add_item("z", "z", audio.z);
add_item("ok", "d'accord", audio.daccord);
add_item("so", "donc", audio.donc);
/*
add_item("flip flops", "tongs", ["http://forvo.com/word/tongs/#fr"]);
add_item("dress", "robe", ["http://forvo.com/word/robe/#fr"]);
add_item("jacket", "veste", ["http://forvo.com/word/veste/#fr"]);
add_item("top", "en haut", ["http://forvo.com/word/en_haut/#fr"]);
add_item("at the bottom", "en bas", ["http://forvo.com/word/en_bas/#fr"]);
add_item("pants", "pantalon", ["http://forvo.com/word/pantalon/#fr"]);
add_item("jewelry", "bijoux", ["http://forvo.com/word/bijoux/#fr"]);
add_item("job", "travail", ["http://forvo.com/word/travail/#fr"]);
add_item("bathing suit", "maillot de bain", ["http://forvo.com/word/maillot_de_bain/#fr"]);
add_item("butterfly", "papillon", ["http://forvo.com/word/papillon/#fr"]);
add_item("sandal", "sandale", ["http://forvo.com/word/sandale/#fr", "http://www.linguee.fr/francais-anglais/traduction/sandale.html"]);
add_item("cold", "froide", ["http://forvo.com/word/froide/#fr"]);
add_item("tie (clothing)", "cravate", ["http://www.linguee.fr/francais-anglais/traduction/cravate.html"]);
add_item("how many", "combien", ["http://www.linguee.fr/francais-anglais/traduction/combien.html"]);
add_item("there are", "il y a", ["http://forvo.com/word/il_y_a/#fr"]);
add_item("in the class", "dans la classe", ["http://forvo.com/word/dans/#fr"]);
add_item("vest", "gilet", ["http://forvo.com/word/gilet/#fr"]);
add_item("beard", "barb\xe9", ["http://forvo.com/word/barb%C3%A9/#fr"]);
add_item("open", "ouverte", ["http://forvo.com/word/ouverte/#fr"]);
add_item("closed", "ferm\xe9e", ["http://forvo.com/word/ferm%C3%A9e/#fr", "http://www.linguee.fr/francais-anglais/traduction/ferm%C3%A9.html"]);
add_item("in the class, how many tables are there?", "Dans la classe, combien est-ce que il y a de tables ?");
add_item("notebook", "cahier", ["http://www.linguee.fr/francais-anglais/traduction/cahier.html", "http://forvo.com/word/cahier/#fr"]);
add_item("desk", "bureau", ["http://www.linguee.fr/francais-anglais/traduction/bureau.html"]);
add_item("a black hat", "un chapeau noir", ["http://forvo.com/word/chapeau/#fr", "http://forvo.com/word/noir/#fr"]);
add_item("a grey suit", "un costume gris", ["http://forvo.com/word/costume/#fr", "http://forvo.com/word/gris/#fr"]);
add_item("some white basketball shoes", "des baskets blanches");
add_item("a brown skirt", "une jupe marron", ["http://forvo.com/word/jupe/#fr", "http://forvo.com/word/marron/#fr"]);
add_item("boots", "des bottes", ["http://forvo.com/word/bottes/#fr"]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 3
add_item("a pencil", "un crayon", ["http://forvo.com/word/crayon/#fr", slides2_page3]);
add_item("a pen", "un stylo", ["http://forvo.com/word/stylo/#fr", slides2_page3]);
add_item("a book", "un livre", ["http://forvo.com/word/un_livre/#fr", slides2_page3]);
add_item("wall", "mur", ["http://forvo.com/word/mur/#fr", slides2_page3]);
add_item("a computer", "un ordinateur", ["http://forvo.com/word/un_ordinateur/#fr"], slides2_page3);
add_item("the floor", "le plancher", ["http://forvo.com/word/plancher/#fr", slides2_page3]);
add_item("cell phone", "portable", ["http://forvo.com/word/portable/#fr", slides2_page3]);
add_item("(f) a student", "une \xe9tudiante", ["http://forvo.com/word/%C3%A9tudiant/#fr", slides2_page3]);
add_item("(m) a student", "un \xe9tudiante", ["http://forvo.com/word/%C3%A9tudiant/#fr", slides2_page3]);
add_item("the professor", "le professeur", ["http://forvo.com/word/le_professeur/#fr", slides2_page3]);
add_item("the clock", "l'horloge (f)", ["http://forvo.com/word/l%27horloge/#fr", slides2_page3]);
add_item("the door", "la porte", ["http://forvo.com/word/la_porte/#fr", slides2_page3]);
add_item("the lights", "les lumi\xe9res (f)", ["http://forvo.com/word/lumi%C3%A8res/#fr", slides2_page3]);
add_item("a window", "une fen\xeatre", ["http://forvo.com/word/fen%C3%AAtre/#fr", slides2_page3]);
add_item("the ceiling", "le plafond", ["http://forvo.com/word/le_plafond/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=le+plafond", slides2_page3]);
//--------------------------------------------------
//--------------------------------------------------
add_item("hidden", "cach\xe9", ["http://www.linguee.fr/francais-anglais/traduction/cach%C3%A9.html", "http://forvo.com/word/cach%C3%A9/#fr"]);
add_item("in the street", "dans la rue", ["http://forvo.com/word/dans_la_rue/#fr", "http://forvo.com/word/dans_la_rue/#fr"]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - notebook page
/*
add_item("on the table", "sur la table", ["http://forvo.com/word/sur_la_table/#fr", "http://forvo.com/word/sur/#fr"]);
add_item("glasses case", "\xe9tui \xe0 lunettes", ["http://forvo.com/word/%C3%A9tui_%C3%A0_lunettes/#fr"]);
add_item("mouse (for computer)", "souris", ["http://forvo.com/word/souris/#fr"]);
add_item("the watch", "la montre", ["http://forvo.com/word/la_montre/#fr"]);
add_item("key", "cl\xe9", [audio_folder+"pronunciation_fr_cle.mp3", "http://forvo.com/word/cl%C3%A9/#fr"]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 5
/*
add_item("the following sentences", "les phrases suivantes", [].concat(audio.phrases, audio.suivantes, [slides2_page5]) );
add_item("we choose a modern phone", "Nous choisissons un t\xe9l\xe9phone moderne", [].concat(audio.nous, audio.choisissons, audio.un_telephone, ["http://forvo.com/word/nous/#fr", "http://forvo.com/word/choisissons/#fr", "http://forvo.com/word/t%C3%A9l%C3%A9phone/#fr", "http://forvo.com/word/moderne/#fr", slides2_page5]) );
add_item("choose", "choisir", [audio_folder+"pronunciation_fr_choisir.mp3", audio_folder+"pronunciation_fr_choisir (1).mp3", "http://forvo.com/word/choisir/#fr", "http://www.linguee.fr/francais-anglais/traduction/choisir.html"]);
add_item("we choose", "nous choisissons", [].concat(audio.nous, audio.choisissons, ["http://forvo.com/word/choisissons/#fr"]) );
add_item("assist", "assister", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=assistez", slides2_page5]);
add_item("you assist", "vous assistez", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=vous", slides2_page5]);
add_item("you are wearing your friend's sweater", "tu portes le pull de ton ami", ["http://www.linguee.fr/francais-anglais/traduction/pull.html", "http://forvo.com/word/pull/#fr", "http://forvo.com/word/ton/#fr", slides2_page5]);
add_item("your", "ton", ["http://forvo.com/word/ton/#fr"]);
add_item("I look at the computer produced by Apple", "je regarde l'ordinateur produit par Apple", [audio_folder+"pronunciation_fr_regarde.mp3", audio_folder+"pronunciation_fr_produit.mp3", audio_folder+"pronunciation_fr_produit (1).mp3", audio_folder+"pronunciation_fr_produit (2).mp3", audio_folder+"pronunciation_fr_par.mp3", audio_folder+"pronunciation_fr_par (1).mp3", "http://forvo.com/word/regarde/#fr", "http://forvo.com/word/produit/#fr", "http://forvo.com/word/par/#fr", slides2_page5]);
add_item("produced", "produit", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=produit", slides2_page5]);
add_item("look at", "regarder", ["http://www.linguee.fr/francais-anglais/traduction/regarder.html", slides2_page5]);
add_item("he has black shoes", "il a des chaussures noires", ["http://forvo.com/word/noires/#fr", slides2_page5]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 6
add_item("the computer is modern but the notebook is ancient", "l'ordinateur est moderne mais le cahier est ancien", ["http://forvo.com/word/moderne/#fr", "http://forvo.com/word/ancien/#fr", slides2_page6]);
add_item("UCSD Extension has a number of teachers", "UCSD Extension a une quantit\xe9 de professeurs", ["http://forvo.com/word/quantit%C3%A9/#fr", "http://www.linguee.fr/francais-anglais/traduction/quantit%C3%A9.html", "http://forvo.com/word/professeur/#fr", "http://forvo.com/word/la_r%C3%A9union_parents-professeurs/#fr", slides2_page6]);
*/
/*
add_item("the quality of teachers is impressive!", "La qualit\xe9 des professeurs est impressionnante!", [audio_folder+"pronunciation_fr_professeur.mp3", audio_folder+"pronunciation_fr_professeur (1).mp3", audio_folder+"pronunciation_fr_la_reunion_parents-professeurs.mp3", audio_folder+"pronunciation_fr_impressionnante.mp3", "http://forvo.com/word/qualit%C3%A9/#fr", "http://forvo.com/word/la_r%C3%A9union_parents-professeurs/#fr", "http://forvo.com/search/impressionnante/", slides2_page6]);
add_item("our teacher gives a composition or essay", "notre professeur donne une composition ou une r\xe9daction", [].concat(audio.notre, audio.professeur, audio.donne, audio.composition, audio.ou, audio.redaction, ["http://forvo.com/word/notre/#fr", "http://forvo.com/word/donne/#fr", "http://forvo.com/search/composition/fr/", "http://forvo.com/search/ou/fr/", "http://forvo.com/search/r%C3%A9daction/fr/", slides2_page6]) );
*/
/*
add_item("the composition has a strict organization", "La composition a une organisation stricte", ["http://forvo.com/word/organisation/#fr", "http://forvo.com/word/stricte/#fr", slides2_page6]);
add_item("the position of words and the selection of vocabulary are important", "La position des mots et la s\xe9lection du vocabulaire sont importantes", ["http://forvo.com/word/mots/#fr", "http://forvo.com/word/s%C3%A9lection/#fr", "http://forvo.com/word/sont/#fr", "http://forvo.com/word/importantes/#fr", slides2_page6]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 7
add_item("masculine", "masculin", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=Masculin", slides2_page7]);
add_item("feminine", "féminin", ["http://forvo.com/word/f%C3%A9minin/#fr", "http://www.linguee.fr/francais-anglais/search?query=f%E9minin&source=auto", slides2_page7]);
add_item("kind / gender", "genre", ["http://forvo.com/word/genre/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=genre", slides2_page7]);
add_item("le genre des noms", "the gender of nouns", ["http://forvo.com/word/genre/#fr", "http://forvo.com/word/noms/#fr", slides2_page7]);
*/
/*
// masculine nouns
add_item("[masculine nouns]", "le gouvernement, le r\xe9alisme, le journal, le pommier, le couloir, le garage, le g\xe9ranium", ["http://forvo.com/word/gouvernement/#fr", "http://forvo.com/word/r%C3%A9alisme/#fr", "http://forvo.com/word/le_journal/#fr", "http://forvo.com/word/pommier/#fr", "http://forvo.com/word/couloir/#fr", "http://forvo.com/word/garage/#fr", "http://forvo.com/word/g%C3%A9ranium/#fr", slides2_page7]);
add_item("the government", "le gouvernement", ["http://forvo.com/word/gouvernement/#fr"]);
add_item("the realism", "le r\xe9alisme", ["http://forvo.com/word/r%C3%A9alisme/#fr"]);
add_item("the journal", "le journal", ["http://forvo.com/word/le_journal/#fr"]);
add_item("the apple tree", "le pommier", [].concat(audio.pommier, ["http://forvo.com/word/pommier/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=pommier"]) );
add_item("the corridor", "le couloir", ["http://forvo.com/word/couloir/#fr"]);
add_item("the garage", "le garage", ["http://forvo.com/word/garage/#fr"]);
add_item("the geranium", "le g\xe9ranium", ["http://forvo.com/word/g%C3%A9ranium/#fr"]);
// feminine nouns
add_item("[feminine nouns]", "la voiture, la beaut\xe9, la mouche, la philosophie, la tablette, la dur\xe9e, la comp\xe9tence", ["http://forvo.com/word/voiture/#fr", "http://forvo.com/word/beaut%C3%A9/#fr", "http://forvo.com/word/la_mouche/#fr", "http://forvo.com/word/philosophie/#fr", "http://forvo.com/word/tablette/#fr", "http://forvo.com/word/dur%C3%A9e/#fr", "http://forvo.com/word/comp%C3%A9tence/#fr", slides2_page7]);
add_item("the car", "la voiture", ["http://forvo.com/word/voiture/#fr"]);
add_item("the beauty", "la beaut\xe9", ["http://forvo.com/word/beaut%C3%A9/#fr"]);
add_item("the fly", "la mouche", ["http://forvo.com/word/la_mouche/#fr"]);
add_item("the philosophy", "la philosophie", ["http://forvo.com/word/philosophie/#fr"]);
add_item("the tablet", "la tablette", ["http://forvo.com/word/tablette/#fr"]);
add_item("the duration", "la dur\xe9e", ["http://forvo.com/word/dur%C3%A9e/#fr"]);
add_item("the competence", "la comp\xe9tence", ["http://forvo.com/word/comp%C3%A9tence/#fr"]);
*/
//
/*
add_item("park the car", "garer la voiture", [].concat(audio.garer_la_voiture, ["http://forvo.com/word/garer_la_voiture/#fr"]) );
add_item("the job", "le poste", [].concat(audio.le_poste, [slides2_page7]) );
add_item("the post office", "la poste", [].concat(audio.la_poste, ["http://www.linguee.fr/francais-anglais/search?source=auto&query=poste", slides2_page7]) );
add_item("the tour", "le tour", [].concat(audio.le_tour_de_france, ["http://forvo.com/search/le%20tour%20de%20france/", "http://forvo.com/word/le_tour/#fr", slides2_page7]) );
add_item("the tower", "la tour", [].concat(audio.la_tour_dargent, ["http://forvo.com/word/la_tour_d%27argent/#fr", slides2_page7]) );
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 9
/*
add_item("the cake", "g\xe2teau", ["http://forvo.com/word/g%C3%A2teau/#fr", slides2_page9]);
add_item("chemistry", "la chimie", ["http://forvo.com/word/la_chimie/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=chimie", slides2_page9]);
add_item("the society", "la soci\xe9t\xe9", ["http://forvo.com/word/la_soci%C3%A9t%C3%A9/", "http://www.linguee.fr/francais-anglais/traduction/soci%C3%A9t%C3%A9.html", slides2_page9]);
add_item("economy", "l’\xe9conomie", ["http://forvo.com/word/l%27%C3%A9conomie/#fr", "http://www.linguee.fr/francais-anglais/traduction/%C3%A9conomie.html", slides2_page9]);
add_item("estimate", "l’estimation", ["http://forvo.com/word/estimation/#fr", slides2_page9]);
add_item("the cleanilness", "la propret\xe9", ["http://www.linguee.fr/francais-anglais/traduction/propret%C3%A9.html", "http://forvo.com/word/propret%C3%A9/#fr", slides2_page9]);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
// class 2 - slides page 11
add_item("an ancient man", "un homme ancien", [audio_folder+"pronunciation_fr_un_homme.mp3", audio_folder+"pronunciation_fr_ancien.mp3", "http://forvo.com/search/un%20homme/fr/", "http://forvo.com/word/ancien/#fr", slides2_page11]);
add_item("an ancient woman", "une femme ancienne", [].concat(audio.un_femme, audio.ancienne, ["http://forvo.com/search/une%20femme/", "http://forvo.com/word/ancienne/#fr", slides2_page11]) );
add_item("ancient men", "des hommes anciens", [audio_folder+"pronunciation_fr_des_hommes.mp3", audio_folder+"pronunciation_fr_anciens.mp3", "http://forvo.com/search/des%20hommes/", "http://forvo.com/word/anciens/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=anciens", slides2_page11]);
add_item("ancient women", "des femmes anciennes", [audio_folder+"pronunciation_fr_droits_des_femmes.mp3", audio_folder+"pronunciation_fr_droits_des_femmes (1).mp3", audio_folder+"pronunciation_fr_anciennes.mp3", audio_folder+"pronunciation_fr_anciennes (1).mp3", "http://forvo.com/search/des%20femmes/", "http://forvo.com/word/anciennes/#fr", slides2_page11]);
//
*/
/*
add_item("a modern man", "un homme moderne", ["http://forvo.com/word/moderne/#fr", slides2_page11]);
add_item("a modern woman", "une femme moderne", ["http://forvo.com/word/moderne/#fr", slides2_page11]);
add_item("modern men", "des hommes modernes", ["http://forvo.com/word/modernes/#fr", slides2_page11]);
add_item("modern women", "des femmes modernes", ["http://forvo.com/word/modernes/#fr", slides2_page11]);
//
add_item("an impressive man", "un homme impressionnant", ["http://forvo.com/word/impressionnant/#fr", slides2_page11]);
add_item("an impressive woman", "une femme impressionnante", ["http://forvo.com/word/impressionnante/#fr", slides2_page11]);
add_item("impressive men", "des hommes impressionnants", [slides2_page11]);
add_item("impressive women", "des femmes impressionnantes", [slides2_page11]);
//
add_item("a strict man", "un homme strict", ["http://forvo.com/word/strict/#fr", slides2_page11]);
add_item("a strict woman", "une femme stricte", ["http://forvo.com/word/stricte/#fr", slides2_page11]);
add_item("strict men", "des hommes stricts", [slides2_page11]);
add_item("strict women", "des femmes strictes", ["http://forvo.com/word/strictes/#fr", slides2_page11]);
//
add_item("an important man", "un homme important", ["http://forvo.com/word/important/#fr", slides2_page11]);
add_item("an important woman", "une femme importante", ["http://forvo.com/word/importante/#fr", slides2_page11]);
add_item("important men", "des hommes importants", ["http://forvo.com/word/importants/#fr", slides2_page11]);
add_item("important women", "des femmes importantes", ["http://forvo.com/word/importantes/#fr", slides2_page11]);
//
add_item("an old man", "un homme vieux", ["http://forvo.com/word/vieux/#fr", slides2_page11]);
add_item("an old woman", "une femme vieille", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=vieille", slides2_page11]);
add_item("old men", "des hommes vieux", ["http://forvo.com/word/vieux/#fr", slides2_page11]);
add_item("old women", "des femmes vieilles", ["http://forvo.com/word/vieilles/#fr", slides2_page11]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 12
/*
add_item("young students", "les \xe9tudiants jeunes", ["http://forvo.com/search/Les%20e%CC%81tudiants/", "http://forvo.com/search/jeunes/", slides2_page12]);
add_item("handsome professors", "des professeurs beaux", ["http://forvo.com/search/professeurs/", "http://forvo.com/search/beaux/", slides2_page12]);
add_item("clean places", "des lieux propres", ["http://www.linguee.fr/francais-anglais/traduction/des+lieux+propres.html", "http://forvo.com/word/lieux/#fr", "http://forvo.com/search/propres/", slides2_page12]);
add_item("newspapers are clear", "les journaux sont clairs", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=Les+journaux+sont+clairs", slides2_page12]);
add_item("French classes are interesting", "les classes de fran\xe7ais sont int\xe9ressantes", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=Les+classes+de+fran%C3%A7ais+sont+int%C3%A9ressantes", "http://forvo.com/search/Les%20classes/", "http://forvo.com/search/sont/", slides2_page12]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 13
/*
add_item("0", "z\xe9ro", ["http://forvo.com/word/z%C3%A9ro/#fr", slides2_page13]);
add_item("1", "un", [audio_folder+"pronunciation_fr_un.mp3", audio_folder+"pronunciation_fr_un (1).mp3", audio_folder+"pronunciation_fr_un (2).mp3", audio_folder+"pronunciation_fr_un (3).mp3", audio_folder+"pronunciation_fr_un (4).mp3", audio_folder+"pronunciation_fr_un (5).mp3", audio_folder+"pronunciation_fr_un (6).mp3", "http://forvo.com/word/un/#fr", slides2_page13]);
add_item("2", "deux", [audio_folder+"pronunciation_fr_deux.mp3", audio_folder+"pronunciation_fr_deux (1).mp3", audio_folder+"pronunciation_fr_deux (2).mp3", audio_folder+"pronunciation_fr_deux (3).mp3", audio_folder+"pronunciation_fr_deux (4).mp3", "http://forvo.com/word/deux/#fr", slides2_page13]);
add_item("3", "trois", [audio_folder+"pronunciation_fr_trois.mp3", audio_folder+"pronunciation_fr_trois (1).mp3", audio_folder+"pronunciation_fr_trois (2).mp3", audio_folder+"pronunciation_fr_trois (3).mp3", "http://forvo.com/word/trois/#fr", slides2_page13]);
add_item("4", "quatre", [audio_folder+"pronunciation_fr_quatre.mp3", audio_folder+"pronunciation_fr_quatre (1).mp3", audio_folder+"pronunciation_fr_quatre (2).mp3", "http://forvo.com/word/quatre/#fr", slides2_page13]);
add_item("5", "cinq", [audio_folder+"pronunciation_fr_cinq.mp3", audio_folder+"pronunciation_fr_cinq (1).mp3", audio_folder+"pronunciation_fr_cinq (2).mp3", audio_folder+"pronunciation_fr_cinq (3).mp3", audio_folder+"pronunciation_fr_cinq (4).mp3", "http://forvo.com/word/cinq/#fr", slides2_page13]);
add_item("6", "six", [audio_folder+"pronunciation_fr_six.mp3", audio_folder+"pronunciation_fr_six (1).mp3", audio_folder+"pronunciation_fr_six (2).mp3", "http://forvo.com/word/six/#fr", slides2_page13]);
add_item("7", "sept", ["http://forvo.com/search/sept/", slides2_page13]);
add_item("8", "huit", ["http://forvo.com/word/huit/#fr", slides2_page13]);
add_item("9", "neuf", ["http://forvo.com/search/neuf/", slides2_page13]);
add_item("10", "dix", [audio_folder+"pronunciation_fr_dix.mp3", audio_folder+"pronunciation_fr_dix (1).mp3", audio_folder+"pronunciation_fr_dix (2).mp3", "http://forvo.com/search/dix/", slides2_page13]);
add_item("11", "onze", ["http://forvo.com/search/onze/", slides2_page13]);
add_item("12", "douze", [audio_folder+"pronunciation_fr_douze.mp3", audio_folder+"pronunciation_fr_douze (1).mp3", audio_folder+"pronunciation_fr_douze (2).mp3", "http://forvo.com/search/douze/", slides2_page13]);
add_item("13", "treize", [audio_folder+"pronunciation_fr_treize.mp3", audio_folder+"pronunciation_fr_treize (1).mp3", audio_folder+"pronunciation_fr_treize (2).mp3", "http://forvo.com/search/treize/", slides2_page13]);
add_item("14", "quatorze", [audio_folder+"pronunciation_fr_quatorze.mp3", audio_folder+"pronunciation_fr_quatorze (1).mp3", audio_folder+"pronunciation_fr_quatorze (2).mp3", "http://forvo.com/search/quatorze/", slides2_page13]);
add_item("15", "quinze", [audio_folder+"pronunciation_fr_quinze.mp3", audio_folder+"pronunciation_fr_quinze (1).mp3", audio_folder+"pronunciation_fr_quinze (2).mp3", audio_folder+"pronunciation_fr_quinze (3).mp3", audio_folder+"pronunciation_fr_quinze (4).mp3", "http://forvo.com/search/quinze/", slides2_page13]);
add_item("16", "seize", [audio_folder+"pronunciation_fr_seize.mp3", audio_folder+"pronunciation_fr_seize (1).mp3", audio_folder+"pronunciation_fr_seize (2).mp3", audio_folder+"pronunciation_fr_seize (3).mp3", "http://forvo.com/search/seize/", slides2_page13]);
add_item("17", "dix-sept", [].concat(audio.dix_sept, ["http://forvo.com/word/dix-sept/#fr", slides2_page13]) );
add_item("18", "dix-huit", ["http://forvo.com/word/dix-huit/#fr", slides2_page13]);
add_item("19", "dix-neuf", ["http://forvo.com/word/dix-neuf/#fr", slides2_page13]);
add_item("20", "vingt", [audio_folder+"pronunciation_fr_vingt.mp3", audio_folder+"pronunciation_fr_vingt (1).mp3", audio_folder+"pronunciation_fr_vingt (2).mp3", audio_folder+"pronunciation_fr_vingt (3).mp3", audio_folder+"pronunciation_fr_vingt (4).mp3", audio_folder+"pronunciation_fr_vingt (5).mp3", audio_folder+"pronunciation_fr_vingt (6).mp3", "http://forvo.com/search/vingt/", slides2_page13]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 14
add_item("30", "trente", [audio_folder+"pronunciation_fr_trente.mp3", audio_folder+"pronunciation_fr_trente (1).mp3", audio_folder+"pronunciation_fr_trente (2).mp3", "http://forvo.com/word/trente/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=trente", slides2_page14]);
add_item("40", "quarante", [audio_folder+"pronunciation_fr_quarante.mp3", "http://forvo.com/search/quarante/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=quarante", slides2_page14]);
add_item("50", "cinquante", [audio_folder+"pronunciation_fr_cinquante.mp3", audio_folder+"pronunciation_fr_cinquante (1).mp3", audio_folder+"pronunciation_fr_cinquante (2).mp3", "http://forvo.com/search/cinquante/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=cinquante", slides2_page14]);
add_item("60", "soixante", [audio_folder+"pronunciation_fr_soixante.mp3", audio_folder+"pronunciation_fr_soixante (1).mp3", audio_folder+"pronunciation_fr_soixante (2).mp3", "http://forvo.com/search/soixante/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=soixante", slides2_page14]);
add_item("70", "soixante-dix", [audio_folder+"pronunciation_fr_soixante-dix.mp3", "http://forvo.com/search/soixante-dix/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=soixante-dix", slides2_page14]);
add_item("80", "quatre-vingts", [audio_folder+"pronunciation_fr_quatre-vingts.mp3", audio_folder+"pronunciation_fr_quatre-vingts (1).mp3", "http://forvo.com/search/quatre-vingts/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=quatre-vingts", slides2_page14]);
add_item("90", "quatre-vingt-dix", [audio_folder+"pronunciation_fr_quatre-vingts-dix.mp3", "http://forvo.com/search/quatre-vingts-dix/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=quatre-vingts-dix", slides2_page14]);
add_item("100", "cent", [audio_folder+"pronunciation_fr_cent.mp3", audio_folder+"pronunciation_fr_cent (1).mp3", audio_folder+"pronunciation_fr_cent (2).mp3", audio_folder+"pronunciation_fr_cent (3).mp3", "http://forvo.com/search/cent/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=cent", slides2_page14]);
add_item("1,000", "mille", [audio_folder+"pronunciation_fr_mille.mp3", audio_folder+"pronunciation_fr_mille (1).mp3", audio_folder+"pronunciation_fr_mille (2).mp3", "http://forvo.com/search/mille/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=mille", slides2_page14]);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
add_item("31", "trente et un", [audio_folder+"pronunciation_fr_trente_et_un.mp3", audio_folder+"pronunciation_fr_trente_et_un (1).mp3", "http://forvo.com/word/trente_et_un/#fr"]);
add_item("32", "trente-deux", [audio_folder+"pronunciation_fr_trente-deux.mp3", audio_folder+"pronunciation_fr_trente-deux (1).mp3", audio_folder+"pronunciation_fr_trente-deux (2).mp3", "http://forvo.com/word/trente-deux/#fr"]);
add_item("33", "trente-trois", [audio_folder+"pronunciation_fr_trente-trois.mp3", audio_folder+"pronunciation_fr_trente-trois (1).mp3", "http://forvo.com/word/trente-trois/#fr"]);
add_item("34", "trente-quatre", audio.trente_quatre);
add_item("35", "trente-cinq", ["http://forvo.com/word/trente-cinq/#fr"]);
add_item("36", "trente-six", [audio_folder+"pronunciation_fr_trente-six.mp3", "http://forvo.com/word/trente-six/#fr"]);
add_item("37", "trente-sept", [audio_folder+"pronunciation_fr_trente-sept.mp3", "http://forvo.com/word/trente-sept/#fr"]);
add_item("38", "trente-huit", [].concat(audio.trente_huit, ["http://forvo.com/word/trente-huit/#fr"]) );
add_item("39", "trente-neuf", [].concat(audio.trente_neuf, ["http://forvo.com/word/trente-neuf/#fr"]) );
add_item("77", "soixante-dix-sept", [audio_folder+"pronunciation_fr_soixante-dix-sept.mp3", "http://forvo.com/word/soixante-dix-sept/#fr"]);
add_item("78", "soixante-dix-huit", [audio_folder+"pronunciation_fr_soixante-dix-huit.mp3", "http://forvo.com/word/soixante-dix-huit/#fr"]);
add_item("79", "soixante-dix-neuf", ["http://forvo.com/word/soixante-dix-neuf/#fr"]);
add_item("97", "quatre-vingt-dix-sept", [audio_folder+"pronunciation_fr_quatre-vingt-dix-sept.mp3", "http://forvo.com/word/quatre-vingt-dix-sept/?#fr"]);
add_item("99", "quatre-vingts-dix-neuf", ["http://forvo.com/word/quatre-vingts-dix-neuf/#fr"]);
add_item("110", "cent dix", [audio_folder+"pronunciation_fr_cent_dix.mp3", "http://forvo.com/word/cent_dix/#fr"]);
add_item("170", "cent soixante-dix", [audio_folder+"pronunciation_fr_cent_soixante-dix.mp3", "http://forvo.com/word/cent_soixante-dix/#fr"]);
add_item("790", "sept cent quatre-vingt-dix", [audio_folder+"pronunciation_fr_sept_cent_quatre-vingt-dix.mp3", "http://forvo.com/word/sept_cent_quatre-vingt-dix/#fr"]);
add_item("678", "six cent soixante-dix-huit", [audio_folder+"pronunciation_fr_six_cent_soixante-dix-huit.mp3", "http://forvo.com/word/six_cent_soixante-dix-huit/#fr"]);
add_item("ten million", "dix millions", [audio_folder+"pronunciation_fr_dix_millions.mp3", audio_folder+"pronunciation_fr_dix_millions (1).mp3", "http://forvo.com/word/dix_millions/#fr"]);
add_item("1099", "mille quatre-vingt-dix-neuf", [audio_folder+"pronunciation_fr_mille_quatre-vingt-dix-neuf.mp3", audio_folder+"pronunciation_fr_mille_quatre-vingt-dix-neuf (1).mp3", "http://forvo.com/word/mille_quatre-vingt-dix-neuf/#fr"]);
add_item("1863", "dix-huit cent soixante-trois", [audio_folder+"pronunciation_fr_dix-huit_cent_soixante-trois.mp3", "http://forvo.com/word/dix-huit_cent_soixante-trois/#fr"]);
add_item("I am 31 years old", "j'ai trente-et-un ans", [audio_folder+"pronunciation_fr_j'ai_trente-et-un_ans.mp3", audio_folder+"pronunciation_fr_j'ai_trente-et-un_ans (1).mp3", "http://forvo.com/word/j%27ai_trente-et-un_ans/#fr"]);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
add_item("perfect", "parfait", audio.parfait);
add_item("something", "quelque chose", audio.quelque_chose);
add_item("this", "ce", audio.ce);
add_item("see you next week", "\xe0 la semaine prochaine", audio.a_la_semaine_prochaine);
//--------------------------------------------------
//--------------------------------------------------
// class 3 notes
add_item("a number", "un chiffre", audio.un_chiffre);
add_item("identical", "identique", audio.identique);
add_item("belt", "ceinture", audio.ceinture);
add_item("high fashion", "haute couture", audio.haut_couture);
add_item("bottle", "bouteille", audio.bouteille);
add_item("beach", "plage", audio.plage);
add_item("billion", "milliard", audio.milliard);
add_item("euro", "euro", audio.euro);
add_item("now", "maintenant", audio.maintenant);
add_item("plural", "pluriel", audio.pluriel);
add_item("married", "mari\xe9", audio.marie);
add_item("winter", "hiver", audio.hiver);
add_item("spring", "printemps", audio.printemps);
add_item("summer", "\xe9t\xe9", audio.ete);
add_item("autumn", "automne", audio.automne);
add_item("today", "aujourd'hui", audio.aujourd_hui);
add_item("tomorrow", "demain", audio.demain);
add_item("yesterday", "hier", audio.hier);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 3
// slides page 2
add_item("see you Thursday", "\xe0 jeudi", audio.a_jeudi);
add_item("turn the page", "tournez la page", [].concat(audio.tournez, audio.la_page));
add_item("open the book", "ouvrez le livre", [].concat(audio.ouvrez, audio.le_livre));
add_item("close the book", "fermez le livre", [].concat(audio.fermez, audio.le_livre));
add_item("look at the whiteboard", "regardez le tableau", [].concat(audio.regardez, audio.tableau));
add_item("write your name", "\xe9crivez votre nom", [].concat(audio.ecrivez, audio.votre_nom_ici));
add_item("raise your hand", "levez la main", [].concat(audio.levez, audio.la_main));
add_item("take a pen", "prenez un stylo", [].concat(audio.prenez, audio.un_stylo));
//--------------------------------------------------
//--------------------------------------------------
// class 4
/*
add_item("to have", "avoir", audio.avoir);
add_item("I have", "j'ai", audio.jai);
add_item("you have", "tu as", audio.tu_as);
add_item("he/she/it has", "il a", audio.il_a);
add_item("we have", "nous avons", [].concat(audio.nous_avons, [slides2_page6]) );
add_item("you(pl) have", "vous avez", audio.vous_avez);
add_item("they have", "ils ont", audio.ils_ont);
add_item("to be", "\xeatre", audio.etre);
add_item("I am", "je suis", audio.je_suis);
add_item("you are", "tu es", audio.tu_es);
add_item("he/she/it is", "il est", audio.il_est);
add_item("we are", "nous sommes", audio.nous_sommes);
add_item("you(pl) are", "vous \xeates", audio.vous_etes);
add_item("they are", "ils sont", audio.ils_sont);
// class 4 - slides page 2
add_item("grand parents", "les grands-parents", audio.les_grands_parents);
add_item("grandfather", "grand-p\xe8re", audio.grand_pere);
add_item("grandmother", "grand-m\xe8re", audio.grand_mere);
add_item("children", "les enfants", audio.les_enfants);
add_item("daughters", "filles", audio.filles);
add_item("sons", "fils", audio.fils);
add_item("brothers", "fr\xe8res", audio.freres);
add_item("sisters", "soeurs", audio.soeurs);
add_item("granddaughter", "petite-fille", audio.petite_fille);
add_item("grandson", "petit-fils", audio.petit_fils);
add_item("parents", "parents", audio.parents);
add_item("build 5 sentences that make sense using the verb 'to be' or 'having'", "construisez 5 phrases qui ont du sens en utilisant les verbes '\xeatre' ou 'avoir'", [].concat(audio.construisez, audio.phrases, audio.qui, audio.ont, audio.du, audio.sens, audio.en_utilisant, audio.verbes));
*/
// class 4 - slides page 6
add_item("to be called", "s'appeler", [].concat(audio.sappeler, slides4_page6));
add_item("I am called / my name is", "je m'appelle", [].concat(audio.je_mappelle, slides4_page6));
add_item("you are called", "tu t'appelles", [].concat(audio.tappelles, slides4_page6));
add_item("he/she/it is called", "il s'appelle", [].concat(audio.il_sappelle, slides4_page6));
add_item("we call ourselves", "nous nous appelons", [].concat(audio.nous_nous_appelons, slides4_page6));
add_item("you(pl) are called", "vous vous appelez", [].concat(audio.vous_vous_appelez, slides4_page6));
add_item("they are called", "elles s'appellent", [].concat(audio.elles_sappellent, slides4_page6));
//
add_item("to love", "aimer", [].concat(audio.aimer, slides4_page6));
add_item("I love", "aime", [].concat(audio.aime, slides4_page6));
add_item("you love", "aimes", [].concat(audio.aimes, slides4_page6));
add_item("he/she/it loves", "aime", [].concat(audio.aime, slides4_page6));
add_item("we love", "aimons", [].concat(audio.aimons, slides4_page6));
add_item("you(pl) love", "aimez", [].concat(audio.aimez, slides4_page6));
add_item("they love", "aiment", [].concat(audio.aiment, slides4_page6));
/*
//
add_item("to practice", "pratiquer", [].concat(audio.pratiquer, slides4_page6));
add_item("I practice", "pratique", [].concat(audio.pratique, slides4_page6));
add_item("you practice", "pratiques", [].concat(audio.pratiques, slides4_page6));
add_item("he/she/it practices", "pratique", [].concat(audio.pratique, slides4_page6));
add_item("we practice", "pratiquons", [].concat(audio.pratiquons, slides4_page6));
*/
add_item("you(pl) practice", "pratiquez", [].concat(audio.pratiquez, slides4_page6));
/*
add_item("they practice", "pratiquent", [].concat(audio.pratiquent, slides4_page6));
//
add_item("you(pl) look at", "regardez", [].concat(audio.regardez, slides4_page6));
*/
// class 4 - slides page 7
add_item("to prefer", "pr\xe9f\xe9rer", [].concat(audio.preferer, slides4_page7));
add_item("I prefer", "pr\xe9f\xe8re", [].concat(audio.prefere, slides4_page7));
add_item("you prefer", "pr\xe9f\xe8res", [].concat(audio.preferes, slides4_page7));
add_item("he/she/it prefers", "pr\xe9f\xe8re", [].concat(audio.prefere, slides4_page7));
add_item("we prefer", "nous pr\xe9f\xe9rons", [].concat(audio.preferons, slides4_page7));
add_item("you(pl) prefer", "pr\xe9f\xe9rez", [].concat(audio.preferez, slides4_page7));
add_item("they prefer", "pr\xe9f\xe8rent", [].concat(audio.preferent, slides4_page7));
/*
// class 4 - page 10
add_item("my (m,s)", "mon", [].concat(audio.mon, slides4_page10));
add_item("my (f,s)", "ma", [].concat(audio.ma, slides4_page10));
add_item("your (m,s)", "ton", [].concat(audio.ton, slides4_page10));
add_item("your (f,s)", "ta", [].concat(audio.ta, slides4_page10));
add_item("his/hers/its (m,s)", "son", [].concat(audio.son, slides4_page10));
add_item("his/her/its (f,s)", "sa", [].concat(audio.sa, slides4_page10));
add_item("our (s)", "notre", [].concat(audio.notre, slides4_page10));
add_item("your(pl) (s)", "votre", [].concat(audio.votre, slides4_page10));
add_item("their (s)", "leur", [].concat(audio.leur, slides4_page10));
//
add_item("my (pl)", "mes", [].concat(audio.mes, slides4_page10));
add_item("your(s) (pl)", "tes", [].concat(audio.tes, slides4_page10));
add_item("his/hers/its (pl)", "ses", [].concat(audio.ses, slides4_page10));
add_item("our (pl)", "nos", [].concat(audio.nos, slides4_page10));
add_item("your(pl) (pl)", "vos", [].concat(audio.vos, slides4_page10));
add_item("their (pl)", "leurs", [].concat(audio.leurs, slides4_page10));
*/
// class 4 - page 11
add_item("January", "Janvier", audio.janvier);
add_item("February", "F\xe9vrier", audio.fevrier);
add_item("March", "Mars", audio.mars);
add_item("April", "Avril", audio.avril);
add_item("May", "Mai", audio.mai);
add_item("June", "Juin", audio.juin);
add_item("July", "Juillet", audio.juillet);
add_item("August", "Ao\xfbt", audio.aout);
add_item("September", "Septembre", audio.septembre);
add_item("October", "Octobre", audio.octobre);
add_item("November", "Novembre", audio.novembre);
add_item("December", "D\xe9cembre", audio.decembre);
//
// singular / masculine object
add_item("my love", "mon amour", audio.mon_amour);
add_item("my darling", "mon ch\xe9ri", audio.mon_cheri)
add_item("your computer", "ton ordinateur", audio.ton_ordinateur);
add_item("what's your phone number", "quel est ton num\xe9ro de t\xe9l\xe9phone", audio.quel_est_ton_numero_de_telephone);
add_item("his computer", "son ordinateur", audio.son_ordinateur);
add_item("his trip", "son trip", audio.son_trip);
//
// singular / feminine object
add_item("my Mom", "ma m\xe8re", audio.ma_mere);
add_item("my wife", "ma femme", audio.ma_femme);
add_item("your fashion", "ta mode", audio.ta_mode);
add_item("your life", "ta vie", audio.ta_vie);
add_item("return his jacket", "retourner sa veste", audio.retourner_sa_veste);
add_item("his family", "sa famille", audio.sa_famille);
//
// plural / singular object
add_item("our sugar", "notre sucre", audio.notre_sucre);
add_item("your(pl) job", "votre travail", audio.votre_travail);
add_item("their university", "leur universit\xe9", audio.leur_universite);
//
// plural object
add_item("my favorites", "mes favorites", audio.mes_favorites);
add_item("your friends", "tes amis", audio.tes_amis);
add_item("turn its wheels", "allumer ses roues", audio.allumer_ses_roues);
add_item("our homework", "nos devoirs", audio.nos_devoirs);
add_item("our luggage", "nos bagages", audio.nos_bagages);
add_item("open your books", "ouvrez vos livres", audio.ouvrez_vos_livres);
add_item("their eyes", "leurs yeux", audio.leurs_yeux);
//--------------------------------------------------
//--------------------------------------------------
// class 5
add_item("to take", "prendre", audio.prendre);
add_item("I take", "je prends", audio.je_prends);
add_item("you take", "tu prends", audio.tu_prends);
add_item("she takes", "elle prend", audio.elle_prend);
add_item("we take", "nous prenons", audio.nous_prenons);
add_item("you(pl) take", "vous prenez", audio.vous_prenez);
add_item("they take", "elles prennent", audio.elles_prennent);
//
add_item("why", "pourquoi", audio.pourquoi);
add_item("grifter/swindler", "escroc", audio.escroc);
add_item("month", "mois", audio.mois);
add_item("your favorite color", "ta couleur pr\xe9f\xe9r\xe9e", [].concat(audio.couleur, audio.prefere));
add_item("the most noteworthy or prized feature, aspect, event, article, etc. of a series or group; special item or attraction", "pi\xe8ce de r\xe9sistance", audio.piece_de_resistance);
//--------------------------------------------------
//--------------------------------------------------
/*
add_item("", "", audio.);
*/
//--------------------------------------------------
console.log("data.js was loaded");




