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
    î   \xee
    ô   \xf4

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
audio.squelette = ["pronunciation_fr_squelette.mp3"];
//
audio.vouloir = getlist("pronunciation_fr_vouloir.mp3", 2);
audio.veux = getlist("pronunciation_fr_veux.mp3", 2);
audio.je_veux = getlist("pronunciation_fr_je_veux.mp3", 2);
audio.tu_veux = getlist("pronunciation_fr_tu_veux.mp3", 2);
audio.veut = getlist("pronunciation_fr_veut.mp3", 2);
audio.elle_veut = getlist("pronunciation_fr_elle_veut.mp3", 1);
audio.voulons = getlist("pronunciation_fr_voulons.mp3", 4);
audio.nous_voulons = getlist("pronunciation_fr_nous_voulons.mp3", 3);
audio.voulez = getlist("pronunciation_fr_voulez.mp3", 1);
audio.vous_voulez = getlist("pronunciation_fr_vous_voulez.mp3", 3);
audio.veulent = getlist("pronunciation_fr_veulent.mp3", 1);
audio.elles_veulent = getlist("pronunciation_fr_elles_veulent.mp3", 1);
//
audio.aller = getlist("pronunciation_fr_aller.mp3", 1);
audio.je_vais = getlist("pronunciation_fr_je_vais.mp3", 2);
audio.vais = getlist("pronunciation_fr_vais.mp3", 3);
audio.tu_vas = getlist("pronunciation_fr_tu_vas.mp3", 2);
audio.il_va = getlist("pronunciation_fr_il_va.mp3", 2);
audio.nous_allons = getlist("pronunciation_fr_nous_allons.mp3", 1);
audio.vous_allez = getlist("pronunciation_fr_vous_allez.mp3", 1);
audio.elles_vont = getlist("pronunciation_fr_elles_vont.mp3", 1);
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
//
audio.faire = getlist("pronunciation_fr_faire.mp3", 2);
audio.je_fais = getlist("pronunciation_fr_je_fais.mp3", 2);
audio.tu_fais = getlist("pronunciation_fr_tu_fais.mp3", 2);
audio.elle_fait = getlist("pronunciation_fr_elle_fait.mp3", 1);
audio.nous_faisons = getlist("pronunciation_fr_nous_faisons.mp3", 6);
audio.vous_faites = getlist("pronunciation_fr_vous_faites.mp3", 2);
audio.elles_font = getlist("pronunciation_fr_elles_font.mp3", 1);
//
audio.savoir = getlist("pronunciation_fr_savoir.mp3", 1);
audio.je_sais = getlist("pronunciation_fr_je_sais.mp3", 1);
audio.tu_sais = getlist("pronunciation_fr_tu_sais.mp3", 1);
audio.elle_sait = getlist("pronunciation_fr_elle_sait.mp3", 1);
audio.il_sait = getlist("pronunciation_fr_il_sait.mp3", 1);
audio.nous_savons = getlist("pronunciation_fr_nous_savons.mp3", 1);
audio.vous_savez = getlist("pronunciation_fr_vous_savez.mp3", 1);
audio.elles_savent = ["pronunciation_fr_elles_savent.mp3"];
audio.ils_savent = ["pronunciation_fr_ils_savent.mp3"];
//
audio.pouvoir = getlist("pronunciation_fr_pouvoir.mp3", 1);
audio.je_peux = getlist("pronunciation_fr_je_peux.mp3", 3);
audio.tu_peux = getlist("pronunciation_fr_tu_peux.mp3", 1);
audio.elle_peut = getlist("pronunciation_fr_elle_peut.mp3", 1);
audio.nous_pouvons = getlist("pronunciation_fr_nous_pouvons.mp3", 1);
audio.vous_pouvez = getlist("pronunciation_fr_vous_pouvez.mp3", 2);
audio.elles_peuvent = getlist("pronunciation_fr_elles_peuvent.mp3", 1);
//
audio.lire = getlist("pronunciation_fr_lire.mp3", 2);
audio.apres = getlist("pronunciation_fr_apr\xe8s.mp3", 1);
audio.mari = getlist("pronunciation_fr_mari.mp3", 3);
audio.beau_fils = getlist("pronunciation_fr_beau-fils.mp3", 1);
audio.belle_mere = ["pronunciation_fr_belle-m\xe8re.mp3"];
audio.la_belle_mere = ["pronunciation_fr_la_belle-m\xe8re.mp3"];
audio.ma_belle_mere = ["pronunciation_fr_ma_belle-m\xe8re.mp3"];
audio.niece = getlist("pronunciation_fr_ni\xe8ce.mp3", 2);
audio.neveu = getlist("pronunciation_fr_neveu.mp3", 1);
audio.tante = ["pronunciation_fr_tante.mp3"];
audio.beau_frere = getlist("pronunciation_fr_beau-fr\xe8re.mp3", 2);
audio.cousin = getlist("pronunciation_fr_cousin.mp3", 2);
audio.cousine = ["pronunciation_fr_cousine.mp3"];
audio.un_cheval = ["pronunciation_fr_un_cheval.mp3"];
audio.les_chevaux = ["pronunciation_fr_les_chevaux.mp3"];
audio.la_ville = getlist("pronunciation_fr_la_ville.mp3", 2);
audio.campagne = ["pronunciation_fr_campagne.mp3"];
audio.bruit = getlist("pronunciation_fr_bruit.mp3", 3);
audio.silence = ["pronunciation_fr_silence.mp3"];
audio.peindre = getlist("pronunciation_fr_peindre.mp3", 2);
audio.faire_du_velo = ["pronunciation_fr_faire_du_v\xe9lo.mp3"];
audio.faire_du_surf = ["pronunciation_fr_faire_du_surf.mp3"];
audio.nager = getlist("pronunciation_fr_nager.mp3", 1);
audio.le_samedi = ["pronunciation_fr_le_samedi.mp3"];
audio.le_dimanche = ["pronunciation_fr_le_dimanche.mp3"];
audio.sortir = getlist("pronunciation_fr_sortir.mp3");
audio.avec = ["pronunciation_fr_avec.mp3"];
audio.copains = ["pronunciation_fr_copains.mp3"];
audio.leve = ["pronunciation_fr_l\xe8ve.mp3"];
audio.pour = getlist("pronunciation_fr_pour.mp3", 2);
audio.dire = ["pronunciation_fr_dire.mp3"];
audio.bonjour = getlist("pronunciation_fr_bonjour.mp3", 14);
audio.du_cafe = getlist("pronunciation_fr_du_caf\xe9.mp3", 1);
audio.ca_va = getlist("pronunciation_fr_\xe7a_va_-.mp3", 3);
//
audio.tous_les_jours = getlist("pronunciation_fr_tous_les_jours.mp3", 2);
audio.de_bonne_heure = getlist("pronunciation_fr_de_bonne_heure.mp3", 1);
audio.bonne_heure = ["pronunciation_fr_bonne_heure.mp3"];
audio.reveille = getlist("pronunciation_fr_r\xe9veille.mp3", 2);
audio.tres = getlist("pronunciation_fr_tr\xe8s.mp3", 4);
audio.lentement = getlist("pronunciation_fr_lentement.mp3", 1);
audio.douche = ["pronunciation_fr_douche.mp3"];
audio.toujours = getlist("pronunciation_fr_toujours.mp3", 4);
audio.matin = getlist("pronunciation_fr_matin.mp3", 3);
audio.le_matin = getlist("pronunciation_fr_le_matin.mp3", 1);
audio.ensuite = ["pronunciation_fr_ensuite.mp3"];
audio.rase = ["pronunciation_fr_rase.mp3"];
audio.devant = getlist("pronunciation_fr_devant.mp3", 2);
audio.miroir = getlist("pronunciation_fr_miroir.mp3", 1);
audio.depeche = ["pronunciation_fr_d\xe9p\xeache.mp3"];
audio.habille = getlist("pronunciation_fr_habille.mp3", 1);
audio.je_mhabille = ["pronunciation_fr_je_m'habille.mp3"];
audio.vite = getlist("pronunciation_fr_vite.mp3", 1);
audio.parce = ["pronunciation_fr_parce.mp3"];
audio.naime_pas = ["pronunciation_fr_n'aime_pas.mp3"];
audio.etre_en_retard = ["pronunciation_fr_\xeatre_en_retard.mp3"];
audio.lecole = ["pronunciation_fr_l'\xe9cole.mp3"];
//
audio.sentrainer = ["pronunciation_fr_s'entra\xeener.mp3"];
audio.au = ["pronunciation_fr_au.mp3"];
audio.gymnase = ["pronunciation_fr_gymnase.mp3"];
audio.fois = ["pronunciation_fr_fois.mp3"];
audio.par_semaine = ["pronunciation_fr_par_semaine.mp3"];
//
audio.brosse = getlist("pronunciation_fr_brosse.mp3", 1);
audio.les_dents = getlist("pronunciation_fr_les_dents.mp3", 1);
audio.avant = getlist("pronunciation_fr_avant.mp3", 3);
audio.lheure_daller_au_lit = getlist("pronunciation_fr_l'heure_d'aller_au_lit.mp3", 1);
audio.lit = getlist("pronunciation_fr_lit.mp3", 2);
//
audio.se_couchent = ["pronunciation_fr_se_couchent.mp3"];
audio.tot = ["pronunciation_fr_t\xf4t.mp3"];
audio.salle_de_classe = ["pronunciation_fr_salle_de_classe.mp3"];
//
audio.tous_mes_amis = ["pronunciation_fr_tous_mes_amis.mp3"];
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
function i(word, definition, links){
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
i("derelict");
i("miasma");
i("deus ex machina");
i("cosmopolitan");
i("de rigueur");
i("raison d'\xEAtre");
i("in statu nascendi");
i("participle");
i("tissue");
i("de novo");
i("diploid");
i("affect");
//--------------------------------------------------
// dates
i("Freud");
i("Magritte");
i("Pollock");
i("Picasso");
i("Hegel");
i("Marx");
i("Breuer treats Anna O.");
i("Plato");
i("Aristotle");
i("Darwin");
i("de Chirico, Giorgio");
i("Dali", "1904"+endash+"1989");
*/
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// French
/*
i("how do you say ... in French?", "comment est-ce que on dit ... en fran\xe7ais ?");
i("what does ... mean?", "que est-ce que ... signifie ?", ["https://www.youtube.com/watch?v=lFEwiNkaLns"]);
i("how do you write ... ?", "comment est-ce que on \xe9crit ... ?");
i("how do you spell ... ?", "comment est-ce que on \xe9pelle ... ?");
i("can you repeat?", "est-ce que tu peux r\xe9p\xe9ter ?");
i("I don't understand (this word / this sentence)", "je ne comprends pas (ce mot / cette phrase)");
i("I have a question", "j'ai une question", ["http://forvo.com/word/j%27ai_une_question/#fr"]);
i("I don't know", "je ne sais pas");
i("student next to me", "Sheshank");
i("professor's name", "Guillaume");
i("This is "+cache+". He is wearing glasses, a yellow shirt and white shoes.", "Voila "+cache+". il porte des lunettes, une chemise jaune et des chaussures blanches");
i("he wears glasses", "il porte des lunettes");
i("shoes", "chaussures", ["http://www.linguee.fr/francais-anglais/traduction/chaussures.html"]);
i("yellow", "jaune");
i("pink", "rose", ["http://www.linguee.fr/francais-anglais/traduction/rose.html"]);
i("white", "blanc", ["http://forvo.com/word/blanc/#fr", "http://www.linguee.fr/francais-anglais/traduction/blanc.html"]);
i("wear", "porter", ["http://www.linguee.fr/francais-anglais/traduction/porter.html"]);
i("glasses", "lunettes");
i("my name is...", "je m\'appelle ...");
i("you're welcome", "je vous en prie", ["https://app.box.com/s/kl9mgkfafb2ncp26gsc531t98v54nrsw","http://forvo.com/word/je_vous_en_prie/"]);
i("what's your name?", "comment tu t'appelles?", ["https://www.youtube.com/watch?v=_Xx0THT3otw","http://forvo.com/word/comment_tu_t%C2%B4appelles%3F/#fr"]);
i("nice to meet you", "enchant\xe9", ["http://forvo.com/search/enchante/"]);
i("how are you?", "comment \xe7a va ?");
i("whatever", "bof");
i("and you?", "et toi ?");
i("what's her name?", "comment elle s'appelle ?");
i("tall", "grand", ["http://www.linguee.fr/francais-anglais/traduction/grand.html"]);
i("small / little", "petit", ["http://www.linguee.fr/francais-anglais/traduction/grand.html"]);
i("young", "jeune", ["http://www.linguee.fr/francais-anglais/traduction/jeune.html"]);
i("old", "\xe2g\xe9", ["http://www.linguee.fr/francais-anglais/traduction/%C3%A2g%C3%A9.html"]);
i("beautiful", "belle");
i("handsome", "beau");
i("ugly", "moche");
i("what are you wearing?", "qu'est-ce que tu portes ?");
i("light (of clothing)", "clair", ["http://www.linguee.fr/francais-anglais/traduction/clair.html"]);
i("dark (of clothing)", "fonc\xe9");
i("I am from ...", "je suis de ...", ["http://forvo.com/word/je_suis_de_floride/#fr"]);
i("I am a student (male) in french", "je suis \xe9tudiant en le fran\xe7ais", ["http://forvo.com/word/%C3%A9tudiant/#fr"]);
i("his name is Guillaume", "il s'appelle Guillaume");
i("her name is Laura", "elle s'appelle Laura");
i("French", "le fran\xe7ais");
i("English (m)", "l'anglais");
i("history", "l'histoire (f)", ["http://forvo.com/word/l%27histoire/#fr"]);
i("computer science", "l'informatique (f)");
i("what's your name? (formal)", "comment vous appelez-vous?", ["http://forvo.com/word/comment_vous_appelez-vous/#fr", "https://media.la.utexas.edu/fi/aud/voc/005.mp3"]);
i("see you tomorrow", "\xe0 demain", ["http://forvo.com/word/%C3%A0_demain/#fr"]);
i("woman", "femme", ["http://www.linguee.fr/francais-anglais/traduction/femme.html"]);
i("man", "homme", ["http://www.linguee.fr/francais-anglais/traduction/homme.html"]);
i("brother", "fr\xe9re", ["http://www.linguee.fr/francais-anglais/traduction/fr%C3%A8re.html"]);
i("table", "table", ["http://www.linguee.fr/francais-anglais/traduction/table.html"]);
i("chair", "chaise", ["http://www.linguee.fr/francais-anglais/traduction/chaise.html"]);
i("a boy", "un gar\xe7on", ["http://forvo.com/word/un_gar%C3%A7on/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
i("the boy", "le gar\xe7on", ["http://forvo.com/word/le_gar%C3%A7on_est_jeune/#fr", "http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en"]);
i("friends or some friends", "des amis", ["http://forvo.com/word/des_amis/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
i("a girl", "une fille", ["http://forvo.com/word/une_fille/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
i("the girl, the actress", "la fille, l'actrice", ["http://forvo.com/word/la_fille/#fr", "http://forvo.com/word/l%27actrice/#fr", "http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en"]);
i("socks", "chaussettes", ["http://forvo.com/word/chaussettes/#fr"]);
i("hair", "cheveux", ["http://forvo.com/word/cheveux/#fr", "http://www.linguee.fr/francais-anglais/traduction/cheveux.html"]);
i("right", "droit", ["http://www.linguee.fr/francais-anglais/traduction/droit.html"]);
i("left", "gauche", ["http://www.linguee.fr/francais-anglais/traduction/gauche.html"]);
i("98", "quatre vingt dix huit", ["http://forvo.com/word/quatre_vingt_dix_huit/#fr"]);
i("21", "vingt et un", ["http://forvo.com/word/vingt_et_un/#fr"]);
i("26", "vingt-six", ["http://forvo.com/word/vingt-six/#fr"]);
i("91", "quatre-vingt-onze", ["http://forvo.com/word/quatre-vingt-onze/#fr"]);
*/
/*
i("a", "a", audio.a);
i("b", "b", audio.b);
i("c", "c", audio.c);
i("d", "d", audio.d);
i("e", "e", audio.e);
i("f", "f", audio.f);
i("g", "g", audio.g);
i("h", "h", audio.h);
i("i", "i", audio.i);
i("j", "j", audio.j);
i("k", "k", audio.k);
i("l m n o p", "l m n o p", [].concat(audio.l, audio.m, audio.n, audio.o, audio.p));
i("q", "q", audio.q);
i("r", "r", audio.r);
i("s", "s", audio.s);
i("t", "t", audio.t);
i("u", "u", audio.u);
i("v", "v", audio.v);
i("w", "w", audio.w);
i("x", "x", audio.x);
i("y", "y", [].concat(audio.y, "https://www.youtube.com/watch?v=fVBDTb_nNgE"));
i("z", "z", audio.z);
i("ok", "d'accord", audio.daccord);
i("so", "donc", audio.donc);
*/
/*
i("flip flops", "tongs", ["http://forvo.com/word/tongs/#fr"]);
i("dress", "robe", ["http://forvo.com/word/robe/#fr"]);
i("jacket", "veste", ["http://forvo.com/word/veste/#fr"]);
i("top", "en haut", ["http://forvo.com/word/en_haut/#fr"]);
i("at the bottom", "en bas", ["http://forvo.com/word/en_bas/#fr"]);
i("pants", "pantalon", ["http://forvo.com/word/pantalon/#fr"]);
i("jewelry", "bijoux", ["http://forvo.com/word/bijoux/#fr"]);
i("job", "travail", ["http://forvo.com/word/travail/#fr"]);
i("bathing suit", "maillot de bain", ["http://forvo.com/word/maillot_de_bain/#fr"]);
i("butterfly", "papillon", ["http://forvo.com/word/papillon/#fr"]);
i("sandal", "sandale", ["http://forvo.com/word/sandale/#fr", "http://www.linguee.fr/francais-anglais/traduction/sandale.html"]);
i("cold", "froide", ["http://forvo.com/word/froide/#fr"]);
i("tie (clothing)", "cravate", ["http://www.linguee.fr/francais-anglais/traduction/cravate.html"]);
i("how many", "combien", ["http://www.linguee.fr/francais-anglais/traduction/combien.html"]);
i("there are", "il y a", ["http://forvo.com/word/il_y_a/#fr"]);
i("in the class", "dans la classe", ["http://forvo.com/word/dans/#fr"]);
i("vest", "gilet", ["http://forvo.com/word/gilet/#fr"]);
i("beard", "barb\xe9", ["http://forvo.com/word/barb%C3%A9/#fr"]);
i("open", "ouverte", ["http://forvo.com/word/ouverte/#fr"]);
i("closed", "ferm\xe9e", ["http://forvo.com/word/ferm%C3%A9e/#fr", "http://www.linguee.fr/francais-anglais/traduction/ferm%C3%A9.html"]);
i("in the class, how many tables are there?", "Dans la classe, combien est-ce que il y a de tables ?");
i("notebook", "cahier", ["http://www.linguee.fr/francais-anglais/traduction/cahier.html", "http://forvo.com/word/cahier/#fr"]);
i("desk", "bureau", ["http://www.linguee.fr/francais-anglais/traduction/bureau.html"]);
i("a black hat", "un chapeau noir", ["http://forvo.com/word/chapeau/#fr", "http://forvo.com/word/noir/#fr"]);
i("a grey suit", "un costume gris", ["http://forvo.com/word/costume/#fr", "http://forvo.com/word/gris/#fr"]);
i("some white basketball shoes", "des baskets blanches");
i("a brown skirt", "une jupe marron", ["http://forvo.com/word/jupe/#fr", "http://forvo.com/word/marron/#fr"]);
i("boots", "des bottes", ["http://forvo.com/word/bottes/#fr"]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 3
i("a pencil", "un crayon", ["http://forvo.com/word/crayon/#fr", slides2_page3]);
i("a pen", "un stylo", ["http://forvo.com/word/stylo/#fr", slides2_page3]);
i("a book", "un livre", ["http://forvo.com/word/un_livre/#fr", slides2_page3]);
i("wall", "mur", ["http://forvo.com/word/mur/#fr", slides2_page3]);
i("a computer", "un ordinateur", ["http://forvo.com/word/un_ordinateur/#fr"], slides2_page3);
i("the floor", "le plancher", ["http://forvo.com/word/plancher/#fr", slides2_page3]);
i("cell phone", "portable", ["http://forvo.com/word/portable/#fr", slides2_page3]);
i("(f) a student", "une \xe9tudiante", ["http://forvo.com/word/%C3%A9tudiant/#fr", slides2_page3]);
i("(m) a student", "un \xe9tudiante", ["http://forvo.com/word/%C3%A9tudiant/#fr", slides2_page3]);
i("the professor", "le professeur", ["http://forvo.com/word/le_professeur/#fr", slides2_page3]);
i("the clock", "l'horloge (f)", ["http://forvo.com/word/l%27horloge/#fr", slides2_page3]);
i("the door", "la porte", ["http://forvo.com/word/la_porte/#fr", slides2_page3]);
i("the lights", "les lumi\xe9res (f)", ["http://forvo.com/word/lumi%C3%A8res/#fr", slides2_page3]);
i("a window", "une fen\xeatre", ["http://forvo.com/word/fen%C3%AAtre/#fr", slides2_page3]);
i("the ceiling", "le plafond", ["http://forvo.com/word/le_plafond/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=le+plafond", slides2_page3]);
//--------------------------------------------------
//--------------------------------------------------
i("hidden", "cach\xe9", ["http://www.linguee.fr/francais-anglais/traduction/cach%C3%A9.html", "http://forvo.com/word/cach%C3%A9/#fr"]);
i("in the street", "dans la rue", ["http://forvo.com/word/dans_la_rue/#fr", "http://forvo.com/word/dans_la_rue/#fr"]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - notebook page
/*
i("on the table", "sur la table", ["http://forvo.com/word/sur_la_table/#fr", "http://forvo.com/word/sur/#fr"]);
i("glasses case", "\xe9tui \xe0 lunettes", ["http://forvo.com/word/%C3%A9tui_%C3%A0_lunettes/#fr"]);
i("mouse (for computer)", "souris", ["http://forvo.com/word/souris/#fr"]);
i("the watch", "la montre", ["http://forvo.com/word/la_montre/#fr"]);
i("key", "cl\xe9", [audio_folder+"pronunciation_fr_cle.mp3", "http://forvo.com/word/cl%C3%A9/#fr"]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 5
/*
i("the following sentences", "les phrases suivantes", [].concat(audio.phrases, audio.suivantes, [slides2_page5]) );
i("we choose a modern phone", "Nous choisissons un t\xe9l\xe9phone moderne", [].concat(audio.nous, audio.choisissons, audio.un_telephone, ["http://forvo.com/word/nous/#fr", "http://forvo.com/word/choisissons/#fr", "http://forvo.com/word/t%C3%A9l%C3%A9phone/#fr", "http://forvo.com/word/moderne/#fr", slides2_page5]) );
i("choose", "choisir", [audio_folder+"pronunciation_fr_choisir.mp3", audio_folder+"pronunciation_fr_choisir (1).mp3", "http://forvo.com/word/choisir/#fr", "http://www.linguee.fr/francais-anglais/traduction/choisir.html"]);
i("we choose", "nous choisissons", [].concat(audio.nous, audio.choisissons, ["http://forvo.com/word/choisissons/#fr"]) );
i("assist", "assister", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=assistez", slides2_page5]);
i("you assist", "vous assistez", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=vous", slides2_page5]);
i("you are wearing your friend's sweater", "tu portes le pull de ton ami", ["http://www.linguee.fr/francais-anglais/traduction/pull.html", "http://forvo.com/word/pull/#fr", "http://forvo.com/word/ton/#fr", slides2_page5]);
i("your", "ton", ["http://forvo.com/word/ton/#fr"]);
i("I look at the computer produced by Apple", "je regarde l'ordinateur produit par Apple", [audio_folder+"pronunciation_fr_regarde.mp3", audio_folder+"pronunciation_fr_produit.mp3", audio_folder+"pronunciation_fr_produit (1).mp3", audio_folder+"pronunciation_fr_produit (2).mp3", audio_folder+"pronunciation_fr_par.mp3", audio_folder+"pronunciation_fr_par (1).mp3", "http://forvo.com/word/regarde/#fr", "http://forvo.com/word/produit/#fr", "http://forvo.com/word/par/#fr", slides2_page5]);
i("produced", "produit", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=produit", slides2_page5]);
i("look at", "regarder", ["http://www.linguee.fr/francais-anglais/traduction/regarder.html", slides2_page5]);
i("he has black shoes", "il a des chaussures noires", ["http://forvo.com/word/noires/#fr", slides2_page5]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 6
i("the computer is modern but the notebook is ancient", "l'ordinateur est moderne mais le cahier est ancien", ["http://forvo.com/word/moderne/#fr", "http://forvo.com/word/ancien/#fr", slides2_page6]);
i("UCSD Extension has a number of teachers", "UCSD Extension a une quantit\xe9 de professeurs", ["http://forvo.com/word/quantit%C3%A9/#fr", "http://www.linguee.fr/francais-anglais/traduction/quantit%C3%A9.html", "http://forvo.com/word/professeur/#fr", "http://forvo.com/word/la_r%C3%A9union_parents-professeurs/#fr", slides2_page6]);
*/
/*
i("the quality of teachers is impressive!", "La qualit\xe9 des professeurs est impressionnante!", [audio_folder+"pronunciation_fr_professeur.mp3", audio_folder+"pronunciation_fr_professeur (1).mp3", audio_folder+"pronunciation_fr_la_reunion_parents-professeurs.mp3", audio_folder+"pronunciation_fr_impressionnante.mp3", "http://forvo.com/word/qualit%C3%A9/#fr", "http://forvo.com/word/la_r%C3%A9union_parents-professeurs/#fr", "http://forvo.com/search/impressionnante/", slides2_page6]);
i("our teacher gives a composition or essay", "notre professeur donne une composition ou une r\xe9daction", [].concat(audio.notre, audio.professeur, audio.donne, audio.composition, audio.ou, audio.redaction, ["http://forvo.com/word/notre/#fr", "http://forvo.com/word/donne/#fr", "http://forvo.com/search/composition/fr/", "http://forvo.com/search/ou/fr/", "http://forvo.com/search/r%C3%A9daction/fr/", slides2_page6]) );
*/
/*
i("the composition has a strict organization", "La composition a une organisation stricte", ["http://forvo.com/word/organisation/#fr", "http://forvo.com/word/stricte/#fr", slides2_page6]);
i("the position of words and the selection of vocabulary are important", "La position des mots et la s\xe9lection du vocabulaire sont importantes", ["http://forvo.com/word/mots/#fr", "http://forvo.com/word/s%C3%A9lection/#fr", "http://forvo.com/word/sont/#fr", "http://forvo.com/word/importantes/#fr", slides2_page6]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 7
i("masculine", "masculin", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=Masculin", slides2_page7]);
i("feminine", "féminin", ["http://forvo.com/word/f%C3%A9minin/#fr", "http://www.linguee.fr/francais-anglais/search?query=f%E9minin&source=auto", slides2_page7]);
i("kind / gender", "genre", ["http://forvo.com/word/genre/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=genre", slides2_page7]);
i("le genre des noms", "the gender of nouns", ["http://forvo.com/word/genre/#fr", "http://forvo.com/word/noms/#fr", slides2_page7]);
*/
/*
// masculine nouns
i("[masculine nouns]", "le gouvernement, le r\xe9alisme, le journal, le pommier, le couloir, le garage, le g\xe9ranium", ["http://forvo.com/word/gouvernement/#fr", "http://forvo.com/word/r%C3%A9alisme/#fr", "http://forvo.com/word/le_journal/#fr", "http://forvo.com/word/pommier/#fr", "http://forvo.com/word/couloir/#fr", "http://forvo.com/word/garage/#fr", "http://forvo.com/word/g%C3%A9ranium/#fr", slides2_page7]);
i("the government", "le gouvernement", ["http://forvo.com/word/gouvernement/#fr"]);
i("the realism", "le r\xe9alisme", ["http://forvo.com/word/r%C3%A9alisme/#fr"]);
i("the journal", "le journal", ["http://forvo.com/word/le_journal/#fr"]);
i("the apple tree", "le pommier", [].concat(audio.pommier, ["http://forvo.com/word/pommier/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=pommier"]) );
i("the corridor", "le couloir", ["http://forvo.com/word/couloir/#fr"]);
i("the garage", "le garage", ["http://forvo.com/word/garage/#fr"]);
i("the geranium", "le g\xe9ranium", ["http://forvo.com/word/g%C3%A9ranium/#fr"]);
// feminine nouns
i("[feminine nouns]", "la voiture, la beaut\xe9, la mouche, la philosophie, la tablette, la dur\xe9e, la comp\xe9tence", ["http://forvo.com/word/voiture/#fr", "http://forvo.com/word/beaut%C3%A9/#fr", "http://forvo.com/word/la_mouche/#fr", "http://forvo.com/word/philosophie/#fr", "http://forvo.com/word/tablette/#fr", "http://forvo.com/word/dur%C3%A9e/#fr", "http://forvo.com/word/comp%C3%A9tence/#fr", slides2_page7]);
i("the car", "la voiture", ["http://forvo.com/word/voiture/#fr"]);
i("the beauty", "la beaut\xe9", ["http://forvo.com/word/beaut%C3%A9/#fr"]);
i("the fly", "la mouche", ["http://forvo.com/word/la_mouche/#fr"]);
i("the philosophy", "la philosophie", ["http://forvo.com/word/philosophie/#fr"]);
i("the tablet", "la tablette", ["http://forvo.com/word/tablette/#fr"]);
i("the duration", "la dur\xe9e", ["http://forvo.com/word/dur%C3%A9e/#fr"]);
i("the competence", "la comp\xe9tence", ["http://forvo.com/word/comp%C3%A9tence/#fr"]);
*/
//
/*
i("park the car", "garer la voiture", [].concat(audio.garer_la_voiture, ["http://forvo.com/word/garer_la_voiture/#fr"]) );
i("the job", "le poste", [].concat(audio.le_poste, [slides2_page7]) );
i("the post office", "la poste", [].concat(audio.la_poste, ["http://www.linguee.fr/francais-anglais/search?source=auto&query=poste", slides2_page7]) );
i("the tour", "le tour", [].concat(audio.le_tour_de_france, ["http://forvo.com/search/le%20tour%20de%20france/", "http://forvo.com/word/le_tour/#fr", slides2_page7]) );
i("the tower", "la tour", [].concat(audio.la_tour_dargent, ["http://forvo.com/word/la_tour_d%27argent/#fr", slides2_page7]) );
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 9
/*
i("the cake", "g\xe2teau", ["http://forvo.com/word/g%C3%A2teau/#fr", slides2_page9]);
i("chemistry", "la chimie", ["http://forvo.com/word/la_chimie/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=chimie", slides2_page9]);
i("the society", "la soci\xe9t\xe9", ["http://forvo.com/word/la_soci%C3%A9t%C3%A9/", "http://www.linguee.fr/francais-anglais/traduction/soci%C3%A9t%C3%A9.html", slides2_page9]);
i("economy", "l’\xe9conomie", ["http://forvo.com/word/l%27%C3%A9conomie/#fr", "http://www.linguee.fr/francais-anglais/traduction/%C3%A9conomie.html", slides2_page9]);
i("estimate", "l’estimation", ["http://forvo.com/word/estimation/#fr", slides2_page9]);
i("the cleanilness", "la propret\xe9", ["http://www.linguee.fr/francais-anglais/traduction/propret%C3%A9.html", "http://forvo.com/word/propret%C3%A9/#fr", slides2_page9]);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
// class 2 - slides page 11
i("an ancient man", "un homme ancien", [audio_folder+"pronunciation_fr_un_homme.mp3", audio_folder+"pronunciation_fr_ancien.mp3", "http://forvo.com/search/un%20homme/fr/", "http://forvo.com/word/ancien/#fr", slides2_page11]);
i("an ancient woman", "une femme ancienne", [].concat(audio.un_femme, audio.ancienne, ["http://forvo.com/search/une%20femme/", "http://forvo.com/word/ancienne/#fr", slides2_page11]) );
i("ancient men", "des hommes anciens", [audio_folder+"pronunciation_fr_des_hommes.mp3", audio_folder+"pronunciation_fr_anciens.mp3", "http://forvo.com/search/des%20hommes/", "http://forvo.com/word/anciens/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=anciens", slides2_page11]);
i("ancient women", "des femmes anciennes", [audio_folder+"pronunciation_fr_droits_des_femmes.mp3", audio_folder+"pronunciation_fr_droits_des_femmes (1).mp3", audio_folder+"pronunciation_fr_anciennes.mp3", audio_folder+"pronunciation_fr_anciennes (1).mp3", "http://forvo.com/search/des%20femmes/", "http://forvo.com/word/anciennes/#fr", slides2_page11]);
//
*/
/*
i("a modern man", "un homme moderne", ["http://forvo.com/word/moderne/#fr", slides2_page11]);
i("a modern woman", "une femme moderne", ["http://forvo.com/word/moderne/#fr", slides2_page11]);
i("modern men", "des hommes modernes", ["http://forvo.com/word/modernes/#fr", slides2_page11]);
i("modern women", "des femmes modernes", ["http://forvo.com/word/modernes/#fr", slides2_page11]);
//
i("an impressive man", "un homme impressionnant", ["http://forvo.com/word/impressionnant/#fr", slides2_page11]);
i("an impressive woman", "une femme impressionnante", ["http://forvo.com/word/impressionnante/#fr", slides2_page11]);
i("impressive men", "des hommes impressionnants", [slides2_page11]);
i("impressive women", "des femmes impressionnantes", [slides2_page11]);
//
i("a strict man", "un homme strict", ["http://forvo.com/word/strict/#fr", slides2_page11]);
i("a strict woman", "une femme stricte", ["http://forvo.com/word/stricte/#fr", slides2_page11]);
i("strict men", "des hommes stricts", [slides2_page11]);
i("strict women", "des femmes strictes", ["http://forvo.com/word/strictes/#fr", slides2_page11]);
//
i("an important man", "un homme important", ["http://forvo.com/word/important/#fr", slides2_page11]);
i("an important woman", "une femme importante", ["http://forvo.com/word/importante/#fr", slides2_page11]);
i("important men", "des hommes importants", ["http://forvo.com/word/importants/#fr", slides2_page11]);
i("important women", "des femmes importantes", ["http://forvo.com/word/importantes/#fr", slides2_page11]);
//
i("an old man", "un homme vieux", ["http://forvo.com/word/vieux/#fr", slides2_page11]);
i("an old woman", "une femme vieille", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=vieille", slides2_page11]);
i("old men", "des hommes vieux", ["http://forvo.com/word/vieux/#fr", slides2_page11]);
i("old women", "des femmes vieilles", ["http://forvo.com/word/vieilles/#fr", slides2_page11]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 12
/*
i("young students", "les \xe9tudiants jeunes", ["http://forvo.com/search/Les%20e%CC%81tudiants/", "http://forvo.com/search/jeunes/", slides2_page12]);
i("handsome professors", "des professeurs beaux", ["http://forvo.com/search/professeurs/", "http://forvo.com/search/beaux/", slides2_page12]);
i("clean places", "des lieux propres", ["http://www.linguee.fr/francais-anglais/traduction/des+lieux+propres.html", "http://forvo.com/word/lieux/#fr", "http://forvo.com/search/propres/", slides2_page12]);
i("newspapers are clear", "les journaux sont clairs", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=Les+journaux+sont+clairs", slides2_page12]);
i("French classes are interesting", "les classes de fran\xe7ais sont int\xe9ressantes", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=Les+classes+de+fran%C3%A7ais+sont+int%C3%A9ressantes", "http://forvo.com/search/Les%20classes/", "http://forvo.com/search/sont/", slides2_page12]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 13
/*
i("0", "z\xe9ro", ["http://forvo.com/word/z%C3%A9ro/#fr", slides2_page13]);
i("1", "un", [audio_folder+"pronunciation_fr_un.mp3", audio_folder+"pronunciation_fr_un (1).mp3", audio_folder+"pronunciation_fr_un (2).mp3", audio_folder+"pronunciation_fr_un (3).mp3", audio_folder+"pronunciation_fr_un (4).mp3", audio_folder+"pronunciation_fr_un (5).mp3", audio_folder+"pronunciation_fr_un (6).mp3", "http://forvo.com/word/un/#fr", slides2_page13]);
i("2", "deux", [audio_folder+"pronunciation_fr_deux.mp3", audio_folder+"pronunciation_fr_deux (1).mp3", audio_folder+"pronunciation_fr_deux (2).mp3", audio_folder+"pronunciation_fr_deux (3).mp3", audio_folder+"pronunciation_fr_deux (4).mp3", "http://forvo.com/word/deux/#fr", slides2_page13]);
i("3", "trois", [audio_folder+"pronunciation_fr_trois.mp3", audio_folder+"pronunciation_fr_trois (1).mp3", audio_folder+"pronunciation_fr_trois (2).mp3", audio_folder+"pronunciation_fr_trois (3).mp3", "http://forvo.com/word/trois/#fr", slides2_page13]);
i("4", "quatre", [audio_folder+"pronunciation_fr_quatre.mp3", audio_folder+"pronunciation_fr_quatre (1).mp3", audio_folder+"pronunciation_fr_quatre (2).mp3", "http://forvo.com/word/quatre/#fr", slides2_page13]);
i("5", "cinq", [audio_folder+"pronunciation_fr_cinq.mp3", audio_folder+"pronunciation_fr_cinq (1).mp3", audio_folder+"pronunciation_fr_cinq (2).mp3", audio_folder+"pronunciation_fr_cinq (3).mp3", audio_folder+"pronunciation_fr_cinq (4).mp3", "http://forvo.com/word/cinq/#fr", slides2_page13]);
i("6", "six", [audio_folder+"pronunciation_fr_six.mp3", audio_folder+"pronunciation_fr_six (1).mp3", audio_folder+"pronunciation_fr_six (2).mp3", "http://forvo.com/word/six/#fr", slides2_page13]);
i("7", "sept", ["http://forvo.com/search/sept/", slides2_page13]);
i("8", "huit", ["http://forvo.com/word/huit/#fr", slides2_page13]);
i("9", "neuf", ["http://forvo.com/search/neuf/", slides2_page13]);
i("10", "dix", [audio_folder+"pronunciation_fr_dix.mp3", audio_folder+"pronunciation_fr_dix (1).mp3", audio_folder+"pronunciation_fr_dix (2).mp3", "http://forvo.com/search/dix/", slides2_page13]);
i("11", "onze", ["http://forvo.com/search/onze/", slides2_page13]);
i("12", "douze", [audio_folder+"pronunciation_fr_douze.mp3", audio_folder+"pronunciation_fr_douze (1).mp3", audio_folder+"pronunciation_fr_douze (2).mp3", "http://forvo.com/search/douze/", slides2_page13]);
i("13", "treize", [audio_folder+"pronunciation_fr_treize.mp3", audio_folder+"pronunciation_fr_treize (1).mp3", audio_folder+"pronunciation_fr_treize (2).mp3", "http://forvo.com/search/treize/", slides2_page13]);
i("14", "quatorze", [audio_folder+"pronunciation_fr_quatorze.mp3", audio_folder+"pronunciation_fr_quatorze (1).mp3", audio_folder+"pronunciation_fr_quatorze (2).mp3", "http://forvo.com/search/quatorze/", slides2_page13]);
i("15", "quinze", [audio_folder+"pronunciation_fr_quinze.mp3", audio_folder+"pronunciation_fr_quinze (1).mp3", audio_folder+"pronunciation_fr_quinze (2).mp3", audio_folder+"pronunciation_fr_quinze (3).mp3", audio_folder+"pronunciation_fr_quinze (4).mp3", "http://forvo.com/search/quinze/", slides2_page13]);
i("16", "seize", [audio_folder+"pronunciation_fr_seize.mp3", audio_folder+"pronunciation_fr_seize (1).mp3", audio_folder+"pronunciation_fr_seize (2).mp3", audio_folder+"pronunciation_fr_seize (3).mp3", "http://forvo.com/search/seize/", slides2_page13]);
i("17", "dix-sept", [].concat(audio.dix_sept, ["http://forvo.com/word/dix-sept/#fr", slides2_page13]) );
i("18", "dix-huit", ["http://forvo.com/word/dix-huit/#fr", slides2_page13]);
i("19", "dix-neuf", ["http://forvo.com/word/dix-neuf/#fr", slides2_page13]);
i("20", "vingt", [audio_folder+"pronunciation_fr_vingt.mp3", audio_folder+"pronunciation_fr_vingt (1).mp3", audio_folder+"pronunciation_fr_vingt (2).mp3", audio_folder+"pronunciation_fr_vingt (3).mp3", audio_folder+"pronunciation_fr_vingt (4).mp3", audio_folder+"pronunciation_fr_vingt (5).mp3", audio_folder+"pronunciation_fr_vingt (6).mp3", "http://forvo.com/search/vingt/", slides2_page13]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 14
i("30", "trente", [audio_folder+"pronunciation_fr_trente.mp3", audio_folder+"pronunciation_fr_trente (1).mp3", audio_folder+"pronunciation_fr_trente (2).mp3", "http://forvo.com/word/trente/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=trente", slides2_page14]);
i("40", "quarante", [audio_folder+"pronunciation_fr_quarante.mp3", "http://forvo.com/search/quarante/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=quarante", slides2_page14]);
i("50", "cinquante", [audio_folder+"pronunciation_fr_cinquante.mp3", audio_folder+"pronunciation_fr_cinquante (1).mp3", audio_folder+"pronunciation_fr_cinquante (2).mp3", "http://forvo.com/search/cinquante/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=cinquante", slides2_page14]);
i("60", "soixante", [audio_folder+"pronunciation_fr_soixante.mp3", audio_folder+"pronunciation_fr_soixante (1).mp3", audio_folder+"pronunciation_fr_soixante (2).mp3", "http://forvo.com/search/soixante/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=soixante", slides2_page14]);
i("70", "soixante-dix", [audio_folder+"pronunciation_fr_soixante-dix.mp3", "http://forvo.com/search/soixante-dix/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=soixante-dix", slides2_page14]);
i("80", "quatre-vingts", [audio_folder+"pronunciation_fr_quatre-vingts.mp3", audio_folder+"pronunciation_fr_quatre-vingts (1).mp3", "http://forvo.com/search/quatre-vingts/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=quatre-vingts", slides2_page14]);
i("90", "quatre-vingt-dix", [audio_folder+"pronunciation_fr_quatre-vingts-dix.mp3", "http://forvo.com/search/quatre-vingts-dix/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=quatre-vingts-dix", slides2_page14]);
i("100", "cent", [audio_folder+"pronunciation_fr_cent.mp3", audio_folder+"pronunciation_fr_cent (1).mp3", audio_folder+"pronunciation_fr_cent (2).mp3", audio_folder+"pronunciation_fr_cent (3).mp3", "http://forvo.com/search/cent/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=cent", slides2_page14]);
i("1,000", "mille", [audio_folder+"pronunciation_fr_mille.mp3", audio_folder+"pronunciation_fr_mille (1).mp3", audio_folder+"pronunciation_fr_mille (2).mp3", "http://forvo.com/search/mille/", "http://www.linguee.fr/francais-anglais/search?source=auto&query=mille", slides2_page14]);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
i("31", "trente et un", [audio_folder+"pronunciation_fr_trente_et_un.mp3", audio_folder+"pronunciation_fr_trente_et_un (1).mp3", "http://forvo.com/word/trente_et_un/#fr"]);
i("32", "trente-deux", [audio_folder+"pronunciation_fr_trente-deux.mp3", audio_folder+"pronunciation_fr_trente-deux (1).mp3", audio_folder+"pronunciation_fr_trente-deux (2).mp3", "http://forvo.com/word/trente-deux/#fr"]);
i("33", "trente-trois", [audio_folder+"pronunciation_fr_trente-trois.mp3", audio_folder+"pronunciation_fr_trente-trois (1).mp3", "http://forvo.com/word/trente-trois/#fr"]);
i("34", "trente-quatre", audio.trente_quatre);
i("35", "trente-cinq", ["http://forvo.com/word/trente-cinq/#fr"]);
i("36", "trente-six", [audio_folder+"pronunciation_fr_trente-six.mp3", "http://forvo.com/word/trente-six/#fr"]);
i("37", "trente-sept", [audio_folder+"pronunciation_fr_trente-sept.mp3", "http://forvo.com/word/trente-sept/#fr"]);
i("38", "trente-huit", [].concat(audio.trente_huit, ["http://forvo.com/word/trente-huit/#fr"]) );
i("39", "trente-neuf", [].concat(audio.trente_neuf, ["http://forvo.com/word/trente-neuf/#fr"]) );
i("77", "soixante-dix-sept", [audio_folder+"pronunciation_fr_soixante-dix-sept.mp3", "http://forvo.com/word/soixante-dix-sept/#fr"]);
i("78", "soixante-dix-huit", [audio_folder+"pronunciation_fr_soixante-dix-huit.mp3", "http://forvo.com/word/soixante-dix-huit/#fr"]);
i("79", "soixante-dix-neuf", ["http://forvo.com/word/soixante-dix-neuf/#fr"]);
i("97", "quatre-vingt-dix-sept", [audio_folder+"pronunciation_fr_quatre-vingt-dix-sept.mp3", "http://forvo.com/word/quatre-vingt-dix-sept/?#fr"]);
i("99", "quatre-vingts-dix-neuf", ["http://forvo.com/word/quatre-vingts-dix-neuf/#fr"]);
i("110", "cent dix", [audio_folder+"pronunciation_fr_cent_dix.mp3", "http://forvo.com/word/cent_dix/#fr"]);
i("170", "cent soixante-dix", [audio_folder+"pronunciation_fr_cent_soixante-dix.mp3", "http://forvo.com/word/cent_soixante-dix/#fr"]);
i("790", "sept cent quatre-vingt-dix", [audio_folder+"pronunciation_fr_sept_cent_quatre-vingt-dix.mp3", "http://forvo.com/word/sept_cent_quatre-vingt-dix/#fr"]);
i("678", "six cent soixante-dix-huit", [audio_folder+"pronunciation_fr_six_cent_soixante-dix-huit.mp3", "http://forvo.com/word/six_cent_soixante-dix-huit/#fr"]);
i("ten million", "dix millions", [audio_folder+"pronunciation_fr_dix_millions.mp3", audio_folder+"pronunciation_fr_dix_millions (1).mp3", "http://forvo.com/word/dix_millions/#fr"]);
i("1099", "mille quatre-vingt-dix-neuf", [audio_folder+"pronunciation_fr_mille_quatre-vingt-dix-neuf.mp3", audio_folder+"pronunciation_fr_mille_quatre-vingt-dix-neuf (1).mp3", "http://forvo.com/word/mille_quatre-vingt-dix-neuf/#fr"]);
i("1863", "dix-huit cent soixante-trois", [audio_folder+"pronunciation_fr_dix-huit_cent_soixante-trois.mp3", "http://forvo.com/word/dix-huit_cent_soixante-trois/#fr"]);
i("I am 31 years old", "j'ai trente-et-un ans", [audio_folder+"pronunciation_fr_j'ai_trente-et-un_ans.mp3", audio_folder+"pronunciation_fr_j'ai_trente-et-un_ans (1).mp3", "http://forvo.com/word/j%27ai_trente-et-un_ans/#fr"]);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
i("perfect", "parfait", audio.parfait);
i("something", "quelque chose", audio.quelque_chose);
i("this", "ce", audio.ce);
i("see you next week", "\xe0 la semaine prochaine", audio.a_la_semaine_prochaine);
//--------------------------------------------------
//--------------------------------------------------
// class 3 notes
i("a number", "un chiffre", audio.un_chiffre);
i("identical", "identique", audio.identique);
i("belt", "ceinture", audio.ceinture);
i("high fashion", "haute couture", audio.haut_couture);
i("bottle", "bouteille", audio.bouteille);
i("beach", "plage", audio.plage);
i("billion", "milliard", audio.milliard);
i("euro", "euro", audio.euro);
i("now", "maintenant", audio.maintenant);
i("plural", "pluriel", audio.pluriel);
i("married", "mari\xe9", audio.marie);
i("winter", "hiver", audio.hiver);
i("spring", "printemps", audio.printemps);
i("summer", "\xe9t\xe9", audio.ete);
i("autumn", "automne", audio.automne);
i("today", "aujourd'hui", audio.aujourd_hui);
i("tomorrow", "demain", audio.demain);
i("yesterday", "hier", audio.hier);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 3
// slides page 2
/*
i("see you Thursday", "\xe0 jeudi", audio.a_jeudi);
i("turn the page", "tournez la page", [].concat(audio.tournez, audio.la_page));
i("open the book", "ouvrez le livre", [].concat(audio.ouvrez, audio.le_livre));
i("close the book", "fermez le livre", [].concat(audio.fermez, audio.le_livre));
i("look at the whiteboard", "regardez le tableau", [].concat(audio.regardez, audio.tableau));
i("write your name", "\xe9crivez votre nom", [].concat(audio.ecrivez, audio.votre_nom_ici));
i("raise your hand", "levez la main", [].concat(audio.levez, audio.la_main));
i("take a pen", "prenez un stylo", [].concat(audio.prenez, audio.un_stylo));
*/
//--------------------------------------------------
//--------------------------------------------------
// class 4
/*
i("to have", "avoir", audio.avoir);
i("I have", "j'ai", audio.jai);
i("you have", "tu as", audio.tu_as);
i("he/she/it has", "il a", audio.il_a);
i("we have", "nous avons", [].concat(audio.nous_avons, [slides2_page6]) );
i("you(pl) have", "vous avez", audio.vous_avez);
i("they have", "ils ont", audio.ils_ont);
//
i("to be", "\xeatre", audio.etre);
i("I am", "je suis", audio.je_suis);
i("you are", "tu es", audio.tu_es);
i("he/she/it is", "il est", audio.il_est);
i("we are", "nous sommes", audio.nous_sommes);
i("you(pl) are", "vous \xeates", audio.vous_etes);
i("they are", "ils sont", audio.ils_sont);
*/
/*
// class 4 - slides page 2
i("grand parents", "les grands-parents", audio.les_grands_parents);
i("grandfather", "grand-p\xe8re", audio.grand_pere);
i("grandmother", "grand-m\xe8re", audio.grand_mere);
i("children", "les enfants", audio.les_enfants);
i("daughters", "filles", audio.filles);
i("sons", "fils", audio.fils);
i("brothers", "fr\xe8res", audio.freres);
i("sisters", "soeurs", audio.soeurs);
i("granddaughter", "petite-fille", audio.petite_fille);
i("grandson", "petit-fils", audio.petit_fils);
i("parents", "parents", audio.parents);
i("build 5 sentences that make sense using the verb 'to be' or 'having'", "construisez 5 phrases qui ont du sens en utilisant les verbes '\xeatre' ou 'avoir'", [].concat(audio.construisez, audio.phrases, audio.qui, audio.ont, audio.du, audio.sens, audio.en_utilisant, audio.verbes));
*/
// class 4 - slides page 6
/*
i("to be called", "s'appeler", [].concat(audio.sappeler, slides4_page6));
i("I am called / my name is", "je m'appelle", [].concat(audio.je_mappelle, slides4_page6));
i("you are called", "tu t'appelles", [].concat(audio.tappelles, slides4_page6));
i("he/she/it is called", "il s'appelle", [].concat(audio.il_sappelle, slides4_page6));
i("we call ourselves", "nous nous appelons", [].concat(audio.nous_nous_appelons, slides4_page6));
i("you(pl) are called", "vous vous appelez", [].concat(audio.vous_vous_appelez, slides4_page6));
i("they are called", "elles s'appellent", [].concat(audio.elles_sappellent, slides4_page6));
//
i("to love", "aimer", [].concat(audio.aimer, slides4_page6));
i("I love", "aime", [].concat(audio.aime, slides4_page6));
i("you love", "aimes", [].concat(audio.aimes, slides4_page6));
i("he/she/it loves", "aime", [].concat(audio.aime, slides4_page6));
i("we love", "aimons", [].concat(audio.aimons, slides4_page6));
i("you(pl) love", "aimez", [].concat(audio.aimez, slides4_page6));
i("they love", "aiment", [].concat(audio.aiment, slides4_page6));
*/
/*
//
i("to practice", "pratiquer", [].concat(audio.pratiquer, slides4_page6));
i("I practice", "pratique", [].concat(audio.pratique, slides4_page6));
i("you practice", "pratiques", [].concat(audio.pratiques, slides4_page6));
i("he/she/it practices", "pratique", [].concat(audio.pratique, slides4_page6));
i("we practice", "pratiquons", [].concat(audio.pratiquons, slides4_page6));
i("you(pl) practice", "pratiquez", [].concat(audio.pratiquez, slides4_page6));
i("they practice", "pratiquent", [].concat(audio.pratiquent, slides4_page6));
//
i("you(pl) look at", "regardez", [].concat(audio.regardez, slides4_page6));
*/
/*
// class 4 - slides page 7
i("to prefer", "pr\xe9f\xe9rer", [].concat(audio.preferer, slides4_page7));
i("I prefer", "pr\xe9f\xe8re", [].concat(audio.prefere, slides4_page7));
i("you prefer", "pr\xe9f\xe8res", [].concat(audio.preferes, slides4_page7));
i("he/she/it prefers", "pr\xe9f\xe8re", [].concat(audio.prefere, slides4_page7));
i("we prefer", "nous pr\xe9f\xe9rons", [].concat(audio.preferons, slides4_page7));
i("you(pl) prefer", "pr\xe9f\xe9rez", [].concat(audio.preferez, slides4_page7));
i("they prefer", "pr\xe9f\xe8rent", [].concat(audio.preferent, slides4_page7));
*/
/*
// class 4 - page 10
i("my (m,s)", "mon", [].concat(audio.mon, slides4_page10));
i("my (f,s)", "ma", [].concat(audio.ma, slides4_page10));
i("your (m,s)", "ton", [].concat(audio.ton, slides4_page10));
i("your (f,s)", "ta", [].concat(audio.ta, slides4_page10));
i("his/hers/its (m,s)", "son", [].concat(audio.son, slides4_page10));
i("his/her/its (f,s)", "sa", [].concat(audio.sa, slides4_page10));
i("our (s)", "notre", [].concat(audio.notre, slides4_page10));
i("your(pl) (s)", "votre", [].concat(audio.votre, slides4_page10));
i("their (s)", "leur", [].concat(audio.leur, slides4_page10));
//
i("my (pl)", "mes", [].concat(audio.mes, slides4_page10));
i("your(s) (pl)", "tes", [].concat(audio.tes, slides4_page10));
i("his/hers/its (pl)", "ses", [].concat(audio.ses, slides4_page10));
i("our (pl)", "nos", [].concat(audio.nos, slides4_page10));
i("your(pl) (pl)", "vos", [].concat(audio.vos, slides4_page10));
i("their (pl)", "leurs", [].concat(audio.leurs, slides4_page10));
*/
// class 4 - page 11
/*
i("January", "Janvier", audio.janvier);
i("February", "F\xe9vrier", audio.fevrier);
i("March", "Mars", audio.mars);
i("April", "Avril", audio.avril);
i("May", "Mai", audio.mai);
i("June", "Juin", audio.juin);
i("July", "Juillet", audio.juillet);
i("August", "Ao\xfbt", audio.aout);
i("September", "Septembre", audio.septembre);
i("October", "Octobre", audio.octobre);
i("November", "Novembre", audio.novembre);
i("December", "D\xe9cembre", audio.decembre);
//
// singular / masculine object
i("my love", "mon amour", audio.mon_amour);
i("my darling", "mon ch\xe9ri", audio.mon_cheri)
i("your computer", "ton ordinateur", audio.ton_ordinateur);
i("what's your phone number", "quel est ton num\xe9ro de t\xe9l\xe9phone", audio.quel_est_ton_numero_de_telephone);
i("his computer", "son ordinateur", audio.son_ordinateur);
i("his trip", "son trip", audio.son_trip);
//
// singular / feminine object
i("my Mom", "ma m\xe8re", audio.ma_mere);
i("my wife", "ma femme", audio.ma_femme);
i("your fashion", "ta mode", audio.ta_mode);
i("your life", "ta vie", audio.ta_vie);
i("return his jacket", "retourner sa veste", audio.retourner_sa_veste);
i("his family", "sa famille", audio.sa_famille);
//
// plural / singular object
i("our sugar", "notre sucre", audio.notre_sucre);
i("your(pl) job", "votre travail", audio.votre_travail);
i("their university", "leur universit\xe9", audio.leur_universite);
//
// plural object
i("my favorites", "mes favorites", audio.mes_favorites);
i("your friends", "tes amis", audio.tes_amis);
i("turn its wheels", "allumer ses roues", audio.allumer_ses_roues);
i("our homework", "nos devoirs", audio.nos_devoirs);
i("our luggage", "nos bagages", audio.nos_bagages);
i("open your books", "ouvrez vos livres", audio.ouvrez_vos_livres);
i("their eyes", "leurs yeux", audio.leurs_yeux);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
// class 5
i("month", "mois", audio.mois);
//
i("to take", "prendre", audio.prendre);
i("I take", "je prends", audio.je_prends);
i("you take", "tu prends", audio.tu_prends);
i("she takes", "elle prend", audio.elle_prend);
i("we take", "nous prenons", audio.nous_prenons);
i("you(pl) take", "vous prenez", audio.vous_prenez);
i("they take", "elles prennent", audio.elles_prennent);
//
i("to want", "vouloir", audio.vouloir);
i("I want", "je veux", [].concat(audio.je_veux, audio.veux));
i("you want", "tu veux", [].concat(audio.tu_veux, audio.veux));
i("she wants", "elle veut", [].concat(audio.elle_veut, audio.veut));
i("we want", "nous voulons", [].concat(audio.nous_voulons, audio.voulons));
i("you(pl) want", "vous voulez", [].concat(audio.vous_voulez, audio.voulez));
i("they want", "elles veulent", [].concat(audio.elles_veulent, audio.veulent));
//
i("to go", "aller", audio.aller);
i("I go", "je vais", [].concat(audio.je_vais, audio.vais));
i("you go", "tu vas", audio.tu_vas);
i("he goes", "il va", audio.il_va);
i("we go", "nous allons", audio.nous_allons);
i("you(pl) go", "vous allez", audio.vous_allez);
i("they go", "elles vont", audio.elles_vont);
//
i("to do", "faire", audio.faire);
i("I do", "je fais", audio.je_fais);
i("you do", "tu fais", audio.tu_fais);
i("she does", "elle fait", audio.elle_fait);
i("we do", "nous faisons", audio.nous_faisons);
i("you(pl) do", "vous fa\xeetes", audio.vous_faites);
i("they do", "elles font", audio.elles_font);
//
i("to know", "savoir", audio.savoir);
i("I know", "je sais", audio.je_sais);
i("you know", "tu sais", audio.tu_sais);
i("she knows", "elle sait", audio.elle_sait);
i("he knows", "il sait", audio.il_sait);
i("we know", "nous savons", audio.nous_savons);
i("you(pl) know", "vous savez", audio.vous_savez);
i("they know", "elles savent", [].concat(audio.elles_savent, audio.ils_savent));
//
i("to be able", "pouvoir", audio.pouvoir);
i("I can", "je peux", audio.je_peux);
i("you can", "tu peux", audio.tu_peux);
i("she can", "elle peut", audio.elle_peut);
i("we can", "nous pouvons", audio.nous_pouvons);
i("you(pl) can", "vous pouvez", audio.vous_pouvez);
i("they can", "elles peuvent", audio.elles_peuvent);
i("to read", "lire", audio.lire);
i("after", "apr\xe8s", audio.apres);
i("husband", "mari", audio.mari);
i("son in law", "beau-fils", audio.beau_fils);
i("mother in law", "belle-m\xe8re", [].concat(audio.belle_mere, audio.la_belle_mere, audio.ma_belle_mere));
i("niece", "ni\xe8ce", audio.niece);
i("nephew", "neveu", audio.neveu);
i("aunt", "tante", audio.tante);
i("brother in law", "beau-fr\xe8re", audio.beau_frere);
i("cousin (m)", "cousin", audio.cousin);
i("cousin (f)", "cousine", audio.cousine);
i("a horse", "un cheval", audio.un_cheval);
i("the horses", "les chevaux", audio.les_chevaux);
i("the city", "la ville", audio.la_ville);
i("countryside", "campagne", audio.campagne);
i("noise", "bruit", audio.bruit);
i("silence", "silence", audio.silence);
i("to paint", "peindre", audio.peindre);
i("to bike", "faire du v\xe9lo", audio.faire_du_velo);
i("to surf", "faire du surf", audio.faire_du_surf);
i("to swim", "nager", audio.nager);
//--------------------------------------------------
//--------------------------------------------------
i("why", "pourquoi", audio.pourquoi);
i("grifter/swindler", "escroc", audio.escroc);
i("your favorite color", "ta couleur pr\xe9f\xe9r\xe9e", [].concat(audio.couleur, audio.prefere));
i("the most noteworthy or prized feature, aspect, event, article, etc. of a series or group; special item or attraction", "pi\xe8ce de r\xe9sistance", audio.piece_de_resistance);
i("skeleton", "squelette", audio.squelette);
i("psychoanalysis", "psychanalyse", [].concat("https://www.youtube.com/watch?v=6mwpkc5mXL4"));
*/
i("saturday", "le samedi", audio.le_samedi);
i("sunday", "le dimanche", audio.le_dimanche);
i("go out with his friends", "sortir avec ses copains", [].concat(audio.sortir, audio.avec, audio.ses, audio.copains));
i("I stand up to say hello", "je me l\xe8ve pour dire bonjour", [].concat(audio.leve, audio.pour, audio.dire, audio.bonjour));
i("coffee", "du caf\xe9", audio.du_cafe);
i("how are you?", "\xe7a va?", audio.ca_va);
//--------------------------------------------------
//--------------------------------------------------
// class 6 - 11.5.15
i("Christine gets up early every day", "Christine se l\xe8ve tous les jours de bonne heure", [].concat(audio.leve, audio.tous_les_jours, audio.de_bonne_heure, audio.bonne_heure));
i("early", "de bonne heure", audio.de_bonne_heure);
i("every day", "tous les jours", audio.tous_les_jours);
//
i("she wakes up very slowly", "elle se r\xe9veille tr\xe8s lentement", [].concat(audio.reveille, audio.tres, audio.lentement));
i("wake up", "r\xe9veille", audio.reveille);
i("very", "tr\xe8s", audio.tres);
i("slowly", "lentement", audio.lentement);
//
i("Bernard always showers in the morning", "Bernard se douche toujours le matin", [].concat(audio.douche, audio.toujours, audio.le_matin, audio.matin));
i("shower", "douche", audio.douche);
i("always", "toujours", audio.toujours);
i("morning", "matin", [].concat(audio.le_matin, audio.matin));
//
i("then he shaves in front of the mirror", "ensuite, il se rase devant le miroir", [].concat(audio.ensuite, audio.rase, audio.devant, audio.miroir));
i("then", "ensuite", audio.ensuite);
i("he is shaving", "il se rase", audio.rase);
i("in front of", "devant", audio.devant);
i("mirror", "miroir", audio.miroir);
//
i("Camille hurries in the morning", "camille se d\xe9p\xeache le matin", [].concat(audio.depeche, audio.le_matin, audio.matin));
i("she hurries", "elle se d\xe9p\xeache", audio.depeche);
//
i("She always dresses very quickly because she does not like to be late for school", "elle s'habille toujours tr\xe8s vite parce qu'elle n'aime pas \xeatre en retard pour l'\xe9cole", [].concat(audio.habille, audio.je_mhabille, audio.toujours, audio.vite, audio.naime_pas, audio.etre_en_retard, audio.pour, audio.lecole));
i("dresses", "habille", audio.habille);
i("I dress", "je m'habille", audio.je_mhabille);
i("quick", "vite", audio.vite);
i("because", "parce", audio.parce);
i("does not like", "n'aime pas", audio.naime_pas);
i("to be late", "\xeatre en retard", audio.etre_en_retard);
i("school", "l'\xe9cole", audio.lecole);
//
i("Bernard trains at the gym three times a week", "Bernard s'entra\xeene au gymnase trois fois par semaine", [].concat(audio.sentrainer, audio.au, audio.gymnase, audio.fois, audio.par_semaine));
i("train / work out", "s'entra\xeener", audio.sentrainer);
i("the", "au", audio.au);
i("gym", "gymnase", audio.gymnase);
i("times", "fois", audio.fois);
i("per week", "par semaine", audio.par_semaine);
//
i("Marie brushes her teeth before going to bed", "Marie se brosse les dents avant d'aller au lit", [].concat(audio.brosse, audio.les_dents, audio.avant, audio.lheure_daller_au_lit));
i("brush", "brosse", audio.brosse);
i("teeth", "les dents", audio.les_dents);
i("before", "avant", audio.avant);
i("bedtime", "l'heure d'aller au lit", audio.lheure_daller_au_lit);
i("bed", "lit", audio.lit);
//
i("Marie and Nathalie go to bed early on school days", "Marie et Nathalie se couchent t\xf4t les jours de classe", [].concat(audio.se_couchent, audio.tot, audio.salle_de_classe));
i("they go to bed", "se couchent", audio.se_couchent);
i("early", "t\xf4t", audio.tot);
i("classroom", "salle de classe", audio.salle_de_classe);
//
i("all my friends", "tous mes amis", audio.tous_mes_amis);
//--------------------------------------------------
//--------------------------------------------------
/*
i("", "", audio.);
*/
//--------------------------------------------------
console.log("data.js was loaded");




