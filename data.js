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
    €   \x80

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
var l = getlist;
var audio = {};
var a = audio;
a.notre = ["pronunciation_fr_notre.mp3", "pronunciation_fr_notre (1).mp3", "pronunciation_fr_notre (2).mp3", "pronunciation_fr_notre (3).mp3"];
a.professeur = ["pronunciation_fr_professeur.mp3", "pronunciation_fr_professeur (1).mp3"];
a.donne = ["pronunciation_fr_donne.mp3"];
a.composition = ["pronunciation_fr_composition.mp3"];
a.ou = ["pronunciation_fr_ou.mp3"];
a.redaction = ["pronunciation_fr_redaction.mp3", "pronunciation_fr_redaction (1).mp3", "pronunciation_fr_redaction (2).mp3"];
a.nous = ["pronunciation_fr_nous.mp3", "pronunciation_fr_nous (1).mp3", "pronunciation_fr_nous (2).mp3", "pronunciation_fr_nous (3).mp3"];
a.choisissons = ["pronunciation_fr_choisissons.mp3"];
a.un_telephone = ["pronunciation_fr_un_telephone_fixe.mp3"];
a.pommier = ["pronunciation_fr_pommier.mp3"];
a.ancienne = ["pronunciation_fr_ancienne.mp3", "pronunciation_fr_ancienne (1).mp3"];
a.un_femme = ["pronunciation_fr_une_femme_mariee.mp3"];
a.dix_sept = ["pronunciation_fr_dix-sept.mp3", "pronunciation_fr_dix-sept (1).mp3", "pronunciation_fr_dix-sept (2).mp3"];
a.trente_neuf = ["pronunciation_fr_trente-neuf.mp3"];
a.trente_huit = ["pronunciation_fr_trente-huit.mp3"];
a.trente_quatre = ["pronunciation_fr_trente-quatre.mp3", "pronunciation_fr_trente-quatre (1).mp3"];
a.un_chiffre = ["pronunciation_fr_un_chiffre.mp3"];
a.identique = ["pronunciation_fr_identique.mp3"];
a.ceinture = ["pronunciation_fr_ceinture.mp3", "pronunciation_fr_ceinture (1).mp3"];
a.haut_couture = ["pronunciation_fr_haute_couture.mp3", "pronunciation_fr_haute_couture (1).mp3", "pronunciation_fr_haute_couture (2).mp3", "pronunciation_fr_haute_couture (3).mp3", "pronunciation_fr_haute_couture (4).mp3"];
a.bouteille = ["pronunciation_fr_bouteille.mp3"];
a.plage = ["pronunciation_fr_plage.mp3", "pronunciation_fr_plage (1).mp3", "pronunciation_fr_plage (2).mp3"];
a.milliard = ["pronunciation_fr_milliard.mp3", "pronunciation_fr_milliard (1).mp3"];
a.euro = ["pronunciation_fr_euro.mp3", "pronunciation_fr_euro (1).mp3", "pronunciation_fr_euro (2).mp3"];
a.maintenant = ["pronunciation_fr_maintenant.mp3", "pronunciation_fr_maintenant (1).mp3", "pronunciation_fr_maintenant (2).mp3", "pronunciation_fr_maintenant (3).mp3", "pronunciation_fr_maintenant (4).mp3", "pronunciation_fr_maintenant (5).mp3", "pronunciation_fr_maintenant (6).mp3"];
a.pluriel = ["pronunciation_fr_pluriel.mp3", "pronunciation_fr_le_pluriel.mp3"];
a.ce = ["pronunciation_fr_ce.mp3", "pronunciation_fr_ce (1).mp3", "pronunciation_fr_ce (2).mp3"];
a.marie = ["pronunciation_fr_marie.mp3", "pronunciation_fr_marie (1).mp3", "pronunciation_fr_marie (2).mp3"];
a.juin = ["pronunciation_fr_juin.mp3", "pronunciation_fr_juin (1).mp3", "pronunciation_fr_juin (2).mp3", "pronunciation_fr_juin (3).mp3"];
a.hiver = ["pronunciation_fr_hiver.mp3", "pronunciation_fr_hiver (1).mp3", "pronunciation_fr_hiver (2).mp3", "pronunciation_fr_hiver (3).mp3"];
a.printemps = ["pronunciation_fr_printemps.mp3", "pronunciation_fr_printemps (1).mp3", "pronunciation_fr_printemps (2).mp3", "pronunciation_fr_printemps (3).mp3", "pronunciation_fr_printemps (4).mp3"];
a.ete = ["pronunciation_fr_ete.mp3", "pronunciation_fr_ete (1).mp3", "pronunciation_fr_ete (2).mp3"];
a.automne = ["pronunciation_fr_automne.mp3"];
a.aujourd_hui = ["pronunciation_fr_aujourd'hui.mp3", "pronunciation_fr_aujourd'hui (1).mp3", "pronunciation_fr_aujourd'hui (2).mp3", "pronunciation_fr_aujourd'hui (3).mp3", "pronunciation_fr_aujourd'hui (4).mp3"];
a.demain = ["pronunciation_fr_demain.mp3", "pronunciation_fr_demain (1).mp3"];
a.hier = ["pronunciation_fr_hier.mp3", "pronunciation_fr_hier (1).mp3", "pronunciation_fr_hier (2).mp3"];
a.le_poste = ["pronunciation_fr_le_poste.mp3"];
a.la_tour_dargent = ["pronunciation_fr_la_tour_d'argent.mp3"];
a.le_tour_de_france = ["pronunciation_fr_le_tour_de_france.mp3", "pronunciation_fr_le_tour_de_france (1).mp3"];
a.la_poste = ["pronunciation_fr_la_poste.mp3", "pronunciation_fr_la_poste (1).mp3"];
a.garer_la_voiture = ["pronunciation_fr_garer_la_voiture.mp3"];
a.parfait = ["pronunciation_fr_parfait.mp3", "pronunciation_fr_parfait (1).mp3"];
//
a.a_jeudi = ["pronunciation_fr_a_jeudi.mp3"];
a.tournez = ["pronunciation_fr_tournez.mp3", "pronunciation_fr_tournez (1).mp3"];
a.la_page = ["pronunciation_fr_la_page.mp3"];
a.ouvrez = ["pronunciation_fr_ouvrez.mp3"];
a.le_livre = ["pronunciation_fr_le_livre.mp3", "pronunciation_fr_le_livre (1).mp3"];
a.fermez = ["pronunciation_fr_fermez.mp3"];
a.regardez = ["pronunciation_fr_regardez.mp3"];
a.tableau = ["pronunciation_fr_tableau.mp3", "pronunciation_fr_tableau (1).mp3", "pronunciation_fr_tableau (2).mp3"];
a.ecrivez = ["pronunciation_fr_ecrivez.mp3"];
a.votre_nom_ici = ["pronunciation_fr_votre_nom_ici.mp3"];
a.a_la_semaine_prochaine = ["pronunciation_fr_a_la_semaine_prochaine.mp3", "pronunciation_fr_a_la_semaine_prochaine (1).mp3", "pronunciation_fr_a_la_semaine_prochaine (2).mp3"];
//
a.avoir = ["pronunciation_fr_avoir.mp3", "pronunciation_fr_avoir (1).mp3", "pronunciation_fr_avoir (2).mp3", "pronunciation_fr_avoir (3).mp3", "pronunciation_fr_avoir (4).mp3", "pronunciation_fr_avoir (5).mp3", "pronunciation_fr_avoir (6).mp3"];
a.jai = ["pronunciation_fr_j\'ai.mp3", "pronunciation_fr_j\'ai (1).mp3", "pronunciation_fr_j\'ai (2).mp3"];
a.tu_as = ["pronunciation_fr_tu_as.mp3", "pronunciation_fr_tu_as (1).mp3"];
a.il_a = ["pronunciation_fr_il_a.mp3"];
a.nous_avons = ["pronunciation_fr_nous_avons.mp3", "pronunciation_fr_nous_avons (1).mp3", "pronunciation_fr_nous_avons (2).mp3", "pronunciation_fr_nous_avons (3).mp3"];
a.vous_avez = ["pronunciation_fr_vous_avez.mp3", "pronunciation_fr_vous_avez (1).mp3"];
a.ils_ont = ["pronunciation_fr_ils_ont.mp3", "pronunciation_fr_ils_ont (1).mp3"];
//
a.etre = ["pronunciation_fr_etre.mp3", "pronunciation_fr_etre (1).mp3"];
a.je_suis = ["pronunciation_fr_je_suis.mp3", "pronunciation_fr_je_suis (1).mp3", "pronunciation_fr_je_suis (2).mp3", "pronunciation_fr_je_suis (3).mp3", "pronunciation_fr_je_suis (4).mp3", "pronunciation_fr_je_suis (5).mp3"];
a.tu_es = ["pronunciation_fr_tu_es.mp3", "pronunciation_fr_tu_es (1).mp3", "pronunciation_fr_tu_es (2).mp3", "pronunciation_fr_tu_es (3).mp3"];
a.il_est = ["pronunciation_fr_il_est.mp3", "pronunciation_fr_il_est (1).mp3", "pronunciation_fr_il_est (2).mp3"];
a.nous_sommes = ["pronunciation_fr_nous_sommes.mp3", "pronunciation_fr_nous_sommes (1).mp3", "pronunciation_fr_nous_sommes (2).mp3"];
a.vous_etes = ["pronunciation_fr_vous_etes.mp3", "pronunciation_fr_vous_etes (1).mp3", "pronunciation_fr_vous_etes (2).mp3"];
a.ils_sont = ["pronunciation_fr_ils_sont.mp3", "pronunciation_fr_ils_sont (1).mp3", "pronunciation_fr_ils_sont (2).mp3"];
//
a.les_grands_parents = ["pronunciation_fr_les_grands-parents.mp3"];
a.grand_pere = ["pronunciation_fr_grand-pere.mp3", "pronunciation_fr_grand-pere (1).mp3", "pronunciation_fr_grand-pere (2).mp3"];
a.grand_mere = ["pronunciation_fr_grand-mere.mp3", "pronunciation_fr_grand-mere (1).mp3"];
a.les_enfants = ["pronunciation_fr_les_enfants.mp3"];
a.filles = ["pronunciation_fr_filles.mp3"];
a.fils = ["pronunciation_fr_fils.mp3", "pronunciation_fr_fils (1).mp3", "pronunciation_fr_fils (2).mp3"];
a.freres = ["pronunciation_fr_freres.mp3"];
a.soeurs = ["pronunciation_fr_soeurs.mp3"];
a.petite_fille = ["pronunciation_fr_petite-fille.mp3", "pronunciation_fr_petite-fille (1).mp3", "pronunciation_fr_petite-fille (2).mp3"];
a.petit_fils = ["pronunciation_fr_petit-fils.mp3", "pronunciation_fr_petit-fils (1).mp3", "pronunciation_fr_petit-fils (2).mp3"];
a.parents = ["pronunciation_fr_parents.mp3"];
a.construisez = ["pronunciation_fr_construisez.mp3", "pronunciation_fr_construisez (1).mp3"];
a.phrases = ["pronunciation_fr_phrases.mp3"];
a.qui = ["pronunciation_fr_qui.mp3", "pronunciation_fr_qui (1).mp3"];
a.ont = ["pronunciation_fr_ont.mp3"];
a.du = ["pronunciation_fr_du.mp3", "pronunciation_fr_du (1).mp3", "pronunciation_fr_du (2).mp3", "pronunciation_fr_du (3).mp3"];
a.sens = ["pronunciation_fr_sens.mp3"];
a.en_utilisant = ["pronunciation_fr_en_utilisant.mp3", "pronunciation_fr_en_utilisant (1).mp3", "pronunciation_fr_en_utilisant (2).mp3"];
a.verbes = ["pronunciation_fr_verbes.mp3"];
//
a.quelque_chose = ["pronunciation_fr_quelque_chose.mp3", "pronunciation_fr_quelque_chose (1).mp3", "pronunciation_fr_quelque_chose (2).mp3", "pronunciation_fr_quelque_chose (3).mp3", "pronunciation_fr_quelque_chose (4).mp3"];
a.suivantes = ["pronunciation_fr_suivantes.mp3"];
//
a.sappeler = ["pronunciation_fr_s'appeler.mp3"];
a.je_mappelle = ["pronunciation_fr_je_m'appelle.mp3", "pronunciation_fr_je_m'appelle (1).mp3", "pronunciation_fr_je_m'appelle (2).mp3", "pronunciation_fr_je_m'appelle (3).mp3", "pronunciation_fr_je_m'appelle (4).mp3"];
a.tappelles = ["pronunciation_fr_tu_t'appelles.mp3", "pronunciation_fr_tu_t'appelles (1).mp3", "pronunciation_fr_tu_t'appelles (2).mp3"];
a.il_sappelle = ["pronunciation_fr_il_s'appelle.mp3", "pronunciation_fr_il_s'appelle (1).mp3"];
a.nous_nous_appelons = ["pronunciation_fr_nous_nous_appelons.mp3", "pronunciation_fr_nous_nous_appelons (1).mp3", "pronunciation_fr_nous_nous_appelons (2).mp3"];
a.vous_vous_appelez = ["pronunciation_fr_vous_vous_appelez.mp3", "pronunciation_fr_vous_vous_appelez (1).mp3", "pronunciation_fr_vous_vous_appelez (2).mp3"];
a.elles_sappellent = ["pronunciation_fr_elles_s'appellent.mp3", "pronunciation_fr_elles_s'appellent (1).mp3"];
//
a.aimer = ["pronunciation_fr_aimer.mp3", "pronunciation_fr_aimer (1).mp3", "pronunciation_fr_aimer (2).mp3"];
a.aime = ["pronunciation_fr_aime.mp3"];
a.aimes = ["pronunciation_fr_aimes.mp3", "pronunciation_fr_aimes (1).mp3"];
a.aimons = ["pronunciation_fr_aimons.mp3", "pronunciation_fr_aimons (1).mp3"];
a.aimez = ["pronunciation_fr_aimez.mp3"];
a.aiment = ["pronunciation_fr_aiment.mp3", "pronunciation_fr_aiment (1).mp3", "pronunciation_fr_aiment (2).mp3"];
//
a.pratiquer = ["pronunciation_fr_pratiquer.mp3"];
a.pratique = ["pronunciation_fr_pratique.mp3"];
a.pratiques = ["pronunciation_fr_pratiques.mp3"];
a.pratiquons = ["pronunciation_fr_pratiquons.mp3"];
a.pratiquez = ["pronunciation_fr_pratiquez.mp3"];
a.pratiquent = ["pronunciation_fr_pratiquent.mp3"];
//
a.preferer = ["pronunciation_fr_preferer.mp3", "pronunciation_fr_preferer (1).mp3"];
a.prefere = ["pronunciation_fr_prefere.mp3"];
a.preferes = ["pronunciation_fr_preferes.mp3"];
a.preferez = ["pronunciation_fr_preferez.mp3"];
a.preferent = ["pronunciation_fr_preferent.mp3"];
//
a.mon = ["pronunciation_fr_mon.mp3"];
a.ma = ["pronunciation_fr_ma.mp3"];
a.ton = ["pronunciation_fr_ton.mp3", "pronunciation_fr_ton (1).mp3", "pronunciation_fr_ton (2).mp3"];
a.ta = ["pronunciation_fr_ta.mp3", "pronunciation_fr_ta (1).mp3", "pronunciation_fr_ta (2).mp3"];
a.son = ["pronunciation_fr_son.mp3", "pronunciation_fr_son (1).mp3", "pronunciation_fr_son (2).mp3", "pronunciation_fr_son (3).mp3"];
a.sa = ["pronunciation_fr_sa.mp3", "pronunciation_fr_sa (1).mp3", "pronunciation_fr_sa (2).mp3"];
a.votre = ["pronunciation_fr_votre.mp3", "pronunciation_fr_votre (1).mp3", "pronunciation_fr_votre (2).mp3"];
a.leur = ["pronunciation_fr_leur.mp3", "pronunciation_fr_leur (1).mp3", "pronunciation_fr_leur (2).mp3", "pronunciation_fr_leur (3).mp3"];
//
a.mes = ["pronunciation_fr_mes.mp3", "pronunciation_fr_mes (1).mp3", "pronunciation_fr_mes (2).mp3"];
a.tes = ["pronunciation_fr_tes.mp3", "pronunciation_fr_tes (1).mp3", "pronunciation_fr_tes (2).mp3"];
a.ses = ["pronunciation_fr_ses.mp3"];
a.nos = ["pronunciation_fr_nos.mp3", "pronunciation_fr_nos (1).mp3", "pronunciation_fr_nos (2).mp3"];
a.vos = ["pronunciation_fr_vos.mp3", "pronunciation_fr_vos (1).mp3", "pronunciation_fr_vos (2).mp3"];
a.leurs = ["pronunciation_fr_leurs.mp3", "pronunciation_fr_leurs (1).mp3", "pronunciation_fr_leurs (2).mp3"];
//
a.janvier = ["pronunciation_fr_janvier.mp3", "pronunciation_fr_janvier (1).mp3", "pronunciation_fr_janvier (2).mp3"];
a.fevrier = ["pronunciation_fr_fevrier.mp3", "pronunciation_fr_fevrier (1).mp3"];
a.mars = ["pronunciation_fr_mars.mp3", "pronunciation_fr_mars (1).mp3", "pronunciation_fr_mars (2).mp3"];
a.avril = ["pronunciation_fr_avril.mp3", "pronunciation_fr_avril (1).mp3", "pronunciation_fr_avril (2).mp3"];
a.mai = ["pronunciation_fr_mai.mp3", "pronunciation_fr_mai (1).mp3", "pronunciation_fr_mai (2).mp3"];
a.juillet = ["pronunciation_fr_juillet.mp3", "pronunciation_fr_juillet (1).mp3", "pronunciation_fr_juillet (2).mp3", "pronunciation_fr_juillet (3).mp3"];
a.aout = ["pronunciation_fr_aout.mp3", "pronunciation_fr_aout (1).mp3", "pronunciation_fr_aout (2).mp3", "pronunciation_fr_aout (3).mp3", "pronunciation_fr_aout (4).mp3"];
a.septembre = ["pronunciation_fr_septembre.mp3", "pronunciation_fr_septembre (1).mp3", "pronunciation_fr_septembre (2).mp3", "pronunciation_fr_septembre (3).mp3"];
a.octobre = ["pronunciation_fr_octobre.mp3", "pronunciation_fr_octobre (1).mp3", "pronunciation_fr_octobre (2).mp3", "pronunciation_fr_octobre (3).mp3"];
a.novembre = ["pronunciation_fr_novembre.mp3", "pronunciation_fr_novembre (1).mp3", "pronunciation_fr_novembre (2).mp3"];
a.squelette = ["pronunciation_fr_squelette.mp3"];
//
a.vouloir = l("pronunciation_fr_vouloir.mp3", 2);
a.veux = l("pronunciation_fr_veux.mp3", 2);
a.je_veux = l("pronunciation_fr_je_veux.mp3", 2);
a.tu_veux = l("pronunciation_fr_tu_veux.mp3", 2);
a.veut = l("pronunciation_fr_veut.mp3", 2);
a.elle_veut = l("pronunciation_fr_elle_veut.mp3", 1);
a.voulons = l("pronunciation_fr_voulons.mp3", 4);
a.nous_voulons = l("pronunciation_fr_nous_voulons.mp3", 3);
a.voulez = l("pronunciation_fr_voulez.mp3", 1);
a.vous_voulez = l("pronunciation_fr_vous_voulez.mp3", 3);
a.veulent = l("pronunciation_fr_veulent.mp3", 1);
a.elles_veulent = l("pronunciation_fr_elles_veulent.mp3", 1);
//
a.aller = l("pronunciation_fr_aller.mp3", 1);
a.je_vais = l("pronunciation_fr_je_vais.mp3", 2);
a.vais = l("pronunciation_fr_vais.mp3", 3);
a.tu_vas = l("pronunciation_fr_tu_vas.mp3", 2);
a.il_va = l("pronunciation_fr_il_va.mp3", 2);
a.nous_allons = l("pronunciation_fr_nous_allons.mp3", 1);
a.vous_allez = l("pronunciation_fr_vous_allez.mp3", 1);
a.elles_vont = l("pronunciation_fr_elles_vont.mp3", 1);
a.decembre = l("pronunciation_fr_decembre.mp3", 1);
//
a.mon_amour = l("pronunciation_fr_mon_amour.mp3", 1);
a.mon_cheri = l("pronunciation_fr_mon_ch\xe9ri.mp3", 3);
a.ton_ordinateur = ["pronunciation_fr_ton_ordinateur.mp3"];
a.quel_est_ton_numero_de_telephone = ["pronunciation_fr_quel_est_ton_num\xe9ro_de_t\xe9l\xe9phone.mp3"];
a.son_ordinateur = ["pronunciation_fr_son_ordinateur.mp3"];
a.son_trip = ["pronunciation_fr_son_trip.mp3"];
//
a.ma_mere = ["pronunciation_fr_ma_m\xe8re.mp3"];
a.ma_femme = l("pronunciation_fr_ma_femme.mp3", 1);
a.ta_mode = l("pronunciation_fr_ta_mode.mp3", 1);
a.ta_vie = ["pronunciation_fr_ta_vie.mp3"];
a.retourner_sa_veste = l("pronunciation_fr_retourner_sa_veste.mp3", 3);
a.sa_famille = ["pronunciation_fr_sa_famille.mp3"];
//
a.notre_sucre = l("pronunciation_fr_notre_sucre.mp3", 1);
a.votre_travail = ["pronunciation_fr_votre_travail.mp3"];
a.leur_universite = l("pronunciation_fr_leur_universit\xe9.mp3", 1);
//
a.mes_favorites = ["pronunciation_fr_mes_favorites.mp3"];
a.tes_amis = l("pronunciation_fr_tes_amis.mp3", 1);
a.allumer_ses_roues = ["pronunciation_fr_allumer_ses_roues.mp3"];
a.nos_devoirs = ["pronunciation_fr_nos_devoirs.mp3"];
a.nos_bagages = l("pronunciation_fr_nos_bagages.mp3", 1);
a.ouvrez_vos_livres = ["pronunciation_fr_ouvrez_vos_livres.mp3"];
a.leurs_yeux = ["pronunciation_fr_leurs_yeux.mp3"];
//
a.preferons = ["pronunciation_fr_pr\xe9f\xe9rons.mp3"];
a.levez = ["pronunciation_fr_levez.mp3"];
a.je_me_leve = l("pronunciation_fr_je_me_l\xe8ve.mp3", 1);
a.la_main = l("pronunciation_fr_la_main.mp3", 1);
a.prenez = ["pronunciation_fr_prenez.mp3"];
a.un_stylo = ["pronunciation_fr_un_stylo.mp3"];
//
a.prendre = l("pronunciation_fr_prendre.mp3", 3);
a.je_prends = l("pronunciation_fr_je_prends.mp3", 1);
a.tu_prends = l("pronunciation_fr_tu_prends.mp3", 1);
a.elle_prend = l("pronunciation_fr_elle_prend.mp3", 1);
a.nous_prenons = l("pronunciation_fr_nous_prenons.mp3", 1);
a.vous_prenez = l("pronunciation_fr_vous_prenez.mp3", 1);
a.elles_prennent = l("pronunciation_fr_elles_prennent.mp3", 1);
//
a.pourquoi = l("pronunciation_fr_pourquoi.mp3", 3);
a.escroc = l("pronunciation_fr_escroc.mp3", 2);
a.a = l("pronunciation_fr_a.mp3", 2);
a.b = ["pronunciation_fr_b.mp3"];
a.c = ["pronunciation_fr_c.mp3"];
a.d = l("pronunciation_fr_d.mp3", 1);
a.e = l("pronunciation_fr_e.mp3", 1);
a.f = l("pronunciation_fr_f.mp3", 1);
a.g = ["pronunciation_fr_g.mp3"];
a.h = ["pronunciation_fr_h.mp3"];
a.i = ["pronunciation_fr_i.mp3"];
a.j = ["pronunciation_fr_j.mp3"];
a.k = ["pronunciation_fr_k.mp3"];
a.l = ["pronunciation_fr_l.mp3"];
a.m = ["pronunciation_fr_m.mp3"];
a.n = ["pronunciation_fr_n.mp3"];
a.o = ["pronunciation_fr_o.mp3"];
a.p = ["pronunciation_fr_p.mp3"];
a.q = ["pronunciation_fr_q.mp3"];
a.r = l("pronunciation_fr_r.mp3", 2);
a.s = l("pronunciation_fr_s.mp3", 1);
a.t = ["pronunciation_fr_t.mp3"];
a.u = l("pronunciation_fr_u.mp3", 2);
a.v = ["pronunciation_fr_v.mp3"];
a.w = ["pronunciation_fr_w.mp3"];
a.x = ["pronunciation_fr_x.mp3"];
a.y = l("pronunciation_fr_y.mp3", 1);
a.z = ["pronunciation_fr_z.mp3"];
a.daccord = l("pronunciation_fr_d'accord.mp3", 4);
a.donc = ["pronunciation_fr_donc.mp3"];
a.mois = ["pronunciation_fr_mois.mp3"];
a.preferee = ["pronunciation_fr_pr\xe9f\xe9re\xe9.mp3"];
a.couleur = l("pronunciation_fr_couleur.mp3", 2);
a.piece_de_resistance = l("pronunciation_fr_pi\xe8ce_de_r\xe9sistance.mp3", 1);
//
a.faire = l("pronunciation_fr_faire.mp3", 2);
a.je_fais = l("pronunciation_fr_je_fais.mp3", 2);
a.tu_fais = l("pronunciation_fr_tu_fais.mp3", 2);
a.elle_fait = l("pronunciation_fr_elle_fait.mp3", 1);
a.nous_faisons = l("pronunciation_fr_nous_faisons.mp3", 6);
a.vous_faites = l("pronunciation_fr_vous_faites.mp3", 2);
a.elles_font = l("pronunciation_fr_elles_font.mp3", 1);
//
a.savoir = l("pronunciation_fr_savoir.mp3", 1);
a.je_sais = l("pronunciation_fr_je_sais.mp3", 1);
a.tu_sais = l("pronunciation_fr_tu_sais.mp3", 1);
a.elle_sait = l("pronunciation_fr_elle_sait.mp3", 1);
a.il_sait = l("pronunciation_fr_il_sait.mp3", 1);
a.nous_savons = l("pronunciation_fr_nous_savons.mp3", 1);
a.vous_savez = l("pronunciation_fr_vous_savez.mp3", 1);
a.elles_savent = ["pronunciation_fr_elles_savent.mp3"];
a.ils_savent = ["pronunciation_fr_ils_savent.mp3"];
//
a.pouvoir = l("pronunciation_fr_pouvoir.mp3", 1);
a.je_peux = l("pronunciation_fr_je_peux.mp3", 3);
a.tu_peux = l("pronunciation_fr_tu_peux.mp3", 1);
a.elle_peut = l("pronunciation_fr_elle_peut.mp3", 1);
a.nous_pouvons = l("pronunciation_fr_nous_pouvons.mp3", 1);
a.vous_pouvez = l("pronunciation_fr_vous_pouvez.mp3", 2);
a.elles_peuvent = l("pronunciation_fr_elles_peuvent.mp3", 1);
//
a.lire = l("pronunciation_fr_lire.mp3", 2);
a.apres = l("pronunciation_fr_apr\xe8s.mp3", 1);
a.mari = l("pronunciation_fr_mari.mp3", 3);
a.beau_fils = l("pronunciation_fr_beau-fils.mp3", 1);
a.belle_mere = ["pronunciation_fr_belle-m\xe8re.mp3"];
a.la_belle_mere = ["pronunciation_fr_la_belle-m\xe8re.mp3"];
a.ma_belle_mere = ["pronunciation_fr_ma_belle-m\xe8re.mp3"];
a.niece = l("pronunciation_fr_ni\xe8ce.mp3", 2);
a.neveu = l("pronunciation_fr_neveu.mp3", 1);
a.tante = ["pronunciation_fr_tante.mp3"];
a.beau_frere = l("pronunciation_fr_beau-fr\xe8re.mp3", 2);
a.cousin = l("pronunciation_fr_cousin.mp3", 2);
a.cousine = ["pronunciation_fr_cousine.mp3"];
a.un_cheval = ["pronunciation_fr_un_cheval.mp3"];
a.les_chevaux = ["pronunciation_fr_les_chevaux.mp3"];
a.la_ville = l("pronunciation_fr_la_ville.mp3", 2);
a.campagne = ["pronunciation_fr_campagne.mp3"];
a.bruit = l("pronunciation_fr_bruit.mp3", 3);
a.silence = ["pronunciation_fr_silence.mp3"];
a.peindre = l("pronunciation_fr_peindre.mp3", 2);
a.faire_du_velo = ["pronunciation_fr_faire_du_v\xe9lo.mp3"];
a.faire_du_surf = ["pronunciation_fr_faire_du_surf.mp3"];
a.nager = l("pronunciation_fr_nager.mp3", 1);
a.le_samedi = ["pronunciation_fr_le_samedi.mp3"];
a.le_dimanche = ["pronunciation_fr_le_dimanche.mp3"];
a.sortir = l("pronunciation_fr_sortir.mp3");
a.avec = ["pronunciation_fr_avec.mp3"];
a.copains = ["pronunciation_fr_copains.mp3"];
a.leve = ["pronunciation_fr_l\xe8ve.mp3"];
a.pour = l("pronunciation_fr_pour.mp3", 2);
a.dire = ["pronunciation_fr_dire.mp3"];
a.bonjour = l("pronunciation_fr_bonjour.mp3", 14);
a.du_cafe = l("pronunciation_fr_du_caf\xe9.mp3", 1);
a.ca_va = l("pronunciation_fr_\xe7a_va_-.mp3", 3);
//
a.tous_les_jours = l("pronunciation_fr_tous_les_jours.mp3", 2);
a.de_bonne_heure = l("pronunciation_fr_de_bonne_heure.mp3", 1);
a.bonne_heure = ["pronunciation_fr_bonne_heure.mp3"];
a.elle_se_reveille_tres_lentement = ["pronunciation_fr_elle_se_r\xe9veille_tr\xe8s_lentement.mp3"];
a.reveille = l("pronunciation_fr_r\xe9veille.mp3", 2);
a.tres = l("pronunciation_fr_tr\xe8s.mp3", 4);
a.lentement = l("pronunciation_fr_lentement.mp3", 1);
a.douche = ["pronunciation_fr_douche.mp3"];
a.toujours = l("pronunciation_fr_toujours.mp3", 4);
a.matin = l("pronunciation_fr_matin.mp3", 3);
a.le_matin = l("pronunciation_fr_le_matin.mp3", 1);
a.ensuite = ["pronunciation_fr_ensuite.mp3"];
a.il_se_rase = ["pronunciation_fr_il_se_rase.mp3"];
a.rase = ["pronunciation_fr_rase.mp3"];
a.devant = l("pronunciation_fr_devant.mp3", 2);
a.miroir = l("pronunciation_fr_miroir.mp3", 1);
a.depeche = ["pronunciation_fr_d\xe9p\xeache.mp3"];
a.habille = l("pronunciation_fr_habille.mp3", 1);
a.je_mhabille = ["pronunciation_fr_je_m'habille.mp3"];
a.vite = l("pronunciation_fr_vite.mp3", 1);
a.parce = ["pronunciation_fr_parce.mp3"];
a.quelle = ["pronunciation_fr_qu'elle.mp3"];
a.parce_que = l("pronunciation_fr_parce_que.mp3", 3);
a.naime_pas = ["pronunciation_fr_n'aime_pas.mp3"];
a.etre_en_retard = ["pronunciation_fr_\xeatre_en_retard.mp3"];
a.lecole = ["pronunciation_fr_l'\xe9cole.mp3"];
a.elle_se_depeche = ["pronunciation_fr_elle_se_d\xe9p\xeache.mp3"];
a.elle_se_depeche_le_matin = ["pronunciation_fr_elle_se_d\xe9p\xeache_le_matin.mp3"];
//
a.sentrainer = ["pronunciation_fr_s'entra\xeener.mp3"];
a.au = ["pronunciation_fr_au.mp3"];
a.gymnase = ["pronunciation_fr_gymnase.mp3"];
a.fois = ["pronunciation_fr_fois.mp3"];
a.par_semaine = ["pronunciation_fr_par_semaine.mp3"];
//
a.brosse = l("pronunciation_fr_brosse.mp3", 1);
a.les_dents = l("pronunciation_fr_les_dents.mp3", 1);
a.avant = l("pronunciation_fr_avant.mp3", 3);
a.lheure_daller_au_lit = l("pronunciation_fr_l'heure_d'aller_au_lit.mp3", 1);
a.lit = l("pronunciation_fr_lit.mp3", 2);
//
a.se_couchent = ["pronunciation_fr_se_couchent.mp3"];
a.tot = ["pronunciation_fr_t\xf4t.mp3"];
a.se_lever_plus_tot = l("pronunciation_fr_se_lever_plus_t\xf4t.mp3", 1);
a.salle_de_classe = ["pronunciation_fr_salle_de_classe.mp3"];
//
a.tous_mes_amis = ["pronunciation_fr_tous_mes_amis.mp3"];
a.bibliotheque = l("pronunciation_fr_biblioth\xe8que.mp3", 2);
a.psychanalyse = ["pronunciation_fr_psychanalyse.mp3"];
a.toi_non_plus = ["pronunciation_fr_toi_non_plus.mp3"];
a.est_cequils_aiment_faire_du_volleyball = ["pronunciation_fr_est-ce_qu'ils_aiment_faire_du_volleyball.mp3"];
a.mairie = l("pronunciation_fr_mairie.mp3", 1);
a.faire_les_courses = l("pronunciation_fr_faire_les_courses.mp3", 2);
a.lire_un_livre_a_lexterieur = ["pronunciation_fr_lire_un_livre_à_l’extérieur.mp3"];
a.pain_de_campagne = ["pronunciation_fr_pain_de_campagne.mp3"];
a.voir_des_etoiles = l("pronunciation_fr_voir_des_étoiles.mp3", 1);
a.les_cheveux_longs = ["pronunciation_fr_les_cheveux_longs.mp3"];
a.fausses = ["pronunciation_fr_fausses.mp3"];
a.boire_un_cafe = ["pronunciation_fr_boire_un_café.mp3"];
a.joyeux = l("pronunciation_fr_joyeux.mp3", 1);
a.hamburger = l("pronunciation_fr_hamburger.mp3", 1);
a.dans_une_semaine = ["pronunciation_fr_dans_une_semaine.mp3"];
a.a_cote = l("pronunciation_fr_à_côté.mp3", 2);
a.vraies = l("pronunciation_fr_vraies.mp3", 1);
a.sculptures = ["pronunciation_fr_sculptures.mp3"];
a.ce_matin = ["pronunciation_fr_ce_matin.mp3"];
a.reparer_ma_voiture = ["pronunciation_fr_réparer_ma_voiture.mp3"];
a.se_reposer = ["pronunciation_fr_se_reposer.mp3"];
a.descriptions = l("pronunciation_fr_descriptions.mp3", 1);

//a.a_cote_dun_lycee = ["pronunciation_fr_à_côté_d'un_lycée.mp3"];
a.a_cote_dun_lycee = ["pronunciation_fr_à_côté_d'un_lycée.mp3"];

a.se_couper = ["pronunciation_fr_se_couper.mp3"];
a.a_dans_2_semaines = ["pronunciation_fr_à_dans_2_semaines.mp3"];
a.manger_un_bon_hamburger = ["pronunciation_fr_manger_un_bon_hamburger.mp3"];
a.adjectif_demonstratif = ["pronunciation_fr_adjectif_démonstratif.mp3"];
a.longs = ["pronunciation_fr_longs.mp3"];
a.lexterieur = ["pronunciation_fr_l’extérieur.mp3"];
a.meilleure = l("pronunciation_fr_meilleure.mp3", 1);
a.la_cheminee = ["pronunciation_fr_la_cheminée.mp3"];
a.actrice = ["pronunciation_fr_actrice.mp3"];
a.gagne = ["pronunciation_fr_gagné.mp3"];
a.moi_non_plus = l("pronunciation_fr_moi_non_plus.mp3", 3);
a.tu_preferes = l("pronunciation_fr_tu_préfères.mp3", 1);
a.cheres = ["pronunciation_fr_chères.mp3"];
a.jutilise = ["pronunciation_fr_j'utilise.mp3"];
a.derriere = l("pronunciation_fr_derrière.mp3", 3);
a.le_theatre = ["pronunciation_fr_le_théâtre.mp3"];
a.musee = ["pronunciation_fr_musée.mp3"];
a.cette = ["pronunciation_fr_cette.mp3"];
a.costume = ["pronunciation_fr_costume.mp3"];
a.eglise = l("pronunciation_fr_église.mp3", 1);
a.en_face = ["pronunciation_fr_en_face.mp3"];
a.public = ["pronunciation_fr_public.mp3"];
a.gare = l("pronunciation_fr_gare.mp3", 1);
//--------------------------------------------------
/*
a. = [""];
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
    if(links){
        if( Object.prototype.toString.call( links ) === '[object Array]' ) {
            item.links = links;
        }
        else {
            item.links = [].concat(links);
        }
    }    
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
i("a", "a", a.a);
i("b", "b", a.b);
i("c", "c", a.c);
i("d", "d", a.d);
i("e", "e", a.e);
i("f", "f", a.f);
i("g", "g", a.g);
i("h", "h", a.h);
i("i", "i", a.i);
i("j", "j", a.j);
i("k", "k", a.k);
i("l m n o p", "l m n o p", [].concat(a.l, a.m, a.n, a.o, a.p));
i("q", "q", a.q);
i("r", "r", a.r);
i("s", "s", a.s);
i("t", "t", a.t);
i("u", "u", a.u);
i("v", "v", a.v);
i("w", "w", a.w);
i("x", "x", a.x);
i("y", "y", [].concat(a.y, "https://www.youtube.com/watch?v=fVBDTb_nNgE"));
i("z", "z", a.z);
i("ok", "d'accord", a.daccord);
i("so", "donc", a.donc);
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
i("the following sentences", "les phrases suivantes", [].concat(a.phrases, a.suivantes, [slides2_page5]) );
i("we choose a modern phone", "Nous choisissons un t\xe9l\xe9phone moderne", [].concat(a.nous, a.choisissons, a.un_telephone, ["http://forvo.com/word/nous/#fr", "http://forvo.com/word/choisissons/#fr", "http://forvo.com/word/t%C3%A9l%C3%A9phone/#fr", "http://forvo.com/word/moderne/#fr", slides2_page5]) );
i("choose", "choisir", [audio_folder+"pronunciation_fr_choisir.mp3", audio_folder+"pronunciation_fr_choisir (1).mp3", "http://forvo.com/word/choisir/#fr", "http://www.linguee.fr/francais-anglais/traduction/choisir.html"]);
i("we choose", "nous choisissons", [].concat(a.nous, a.choisissons, ["http://forvo.com/word/choisissons/#fr"]) );
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
i("our teacher gives a composition or essay", "notre professeur donne une composition ou une r\xe9daction", [].concat(a.notre, a.professeur, a.donne, a.composition, a.ou, a.redaction, ["http://forvo.com/word/notre/#fr", "http://forvo.com/word/donne/#fr", "http://forvo.com/search/composition/fr/", "http://forvo.com/search/ou/fr/", "http://forvo.com/search/r%C3%A9daction/fr/", slides2_page6]) );
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
i("the apple tree", "le pommier", [].concat(a.pommier, ["http://forvo.com/word/pommier/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=pommier"]) );
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
i("park the car", "garer la voiture", [].concat(a.garer_la_voiture, ["http://forvo.com/word/garer_la_voiture/#fr"]) );
i("the job", "le poste", [].concat(a.le_poste, [slides2_page7]) );
i("the post office", "la poste", [].concat(a.la_poste, ["http://www.linguee.fr/francais-anglais/search?source=auto&query=poste", slides2_page7]) );
i("the tour", "le tour", [].concat(a.le_tour_de_france, ["http://forvo.com/search/le%20tour%20de%20france/", "http://forvo.com/word/le_tour/#fr", slides2_page7]) );
i("the tower", "la tour", [].concat(a.la_tour_dargent, ["http://forvo.com/word/la_tour_d%27argent/#fr", slides2_page7]) );
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
i("an ancient woman", "une femme ancienne", [].concat(a.un_femme, a.ancienne, ["http://forvo.com/search/une%20femme/", "http://forvo.com/word/ancienne/#fr", slides2_page11]) );
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
i("17", "dix-sept", [].concat(a.dix_sept, ["http://forvo.com/word/dix-sept/#fr", slides2_page13]) );
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
i("34", "trente-quatre", a.trente_quatre);
i("35", "trente-cinq", ["http://forvo.com/word/trente-cinq/#fr"]);
i("36", "trente-six", [audio_folder+"pronunciation_fr_trente-six.mp3", "http://forvo.com/word/trente-six/#fr"]);
i("37", "trente-sept", [audio_folder+"pronunciation_fr_trente-sept.mp3", "http://forvo.com/word/trente-sept/#fr"]);
i("38", "trente-huit", [].concat(a.trente_huit, ["http://forvo.com/word/trente-huit/#fr"]) );
i("39", "trente-neuf", [].concat(a.trente_neuf, ["http://forvo.com/word/trente-neuf/#fr"]) );
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
i("perfect", "parfait", a.parfait);
i("something", "quelque chose", a.quelque_chose);
i("this", "ce", a.ce);
i("see you next week", "\xe0 la semaine prochaine", a.a_la_semaine_prochaine);
//--------------------------------------------------
//--------------------------------------------------
// class 3 notes
i("a number", "un chiffre", a.un_chiffre);
i("identical", "identique", a.identique);
i("belt", "ceinture", a.ceinture);
i("high fashion", "haute couture", a.haut_couture);
i("bottle", "bouteille", a.bouteille);
i("beach", "plage", a.plage);
i("billion", "milliard", a.milliard);
i("euro", "euro", a.euro);
i("now", "maintenant", a.maintenant);
i("plural", "pluriel", a.pluriel);
i("married", "mari\xe9", a.marie);
i("winter", "hiver", a.hiver);
i("spring", "printemps", a.printemps);
i("summer", "\xe9t\xe9", a.ete);
i("autumn", "automne", a.automne);
i("today", "aujourd'hui", a.aujourd_hui);
i("tomorrow", "demain", a.demain);
i("yesterday", "hier", a.hier);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 3
// slides page 2
/*
i("see you Thursday", "\xe0 jeudi", a.a_jeudi);
i("turn the page", "tournez la page", [].concat(a.tournez, a.la_page));
i("open the book", "ouvrez le livre", [].concat(a.ouvrez, a.le_livre));
i("close the book", "fermez le livre", [].concat(a.fermez, a.le_livre));
i("look at the whiteboard", "regardez le tableau", [].concat(a.regardez, a.tableau));
i("write your name", "\xe9crivez votre nom", [].concat(a.ecrivez, a.votre_nom_ici));
i("raise your hand", "levez la main", [].concat(a.levez, a.la_main));
i("take a pen", "prenez un stylo", [].concat(a.prenez, a.un_stylo));
*/
//--------------------------------------------------
//--------------------------------------------------
// class 4
/*
i("to have", "avoir", a.avoir);
i("I have", "j'ai", a.jai);
i("you have", "tu as", a.tu_as);
i("he/she/it has", "il a", a.il_a);
i("we have", "nous avons", [].concat(a.nous_avons, [slides2_page6]) );
i("you(pl) have", "vous avez", a.vous_avez);
i("they have", "ils ont", a.ils_ont);
//
i("to be", "\xeatre", a.etre);
i("I am", "je suis", a.je_suis);
i("you are", "tu es", a.tu_es);
i("he/she/it is", "il est", a.il_est);
i("we are", "nous sommes", a.nous_sommes);
i("you(pl) are", "vous \xeates", a.vous_etes);
i("they are", "ils sont", a.ils_sont);
*/
/*
// class 4 - slides page 2
i("grand parents", "les grands-parents", a.les_grands_parents);
i("grandfather", "grand-p\xe8re", a.grand_pere);
i("grandmother", "grand-m\xe8re", a.grand_mere);
i("children", "les enfants", a.les_enfants);
i("daughters", "filles", a.filles);
i("sons", "fils", a.fils);
i("brothers", "fr\xe8res", a.freres);
i("sisters", "soeurs", a.soeurs);
i("granddaughter", "petite-fille", a.petite_fille);
i("grandson", "petit-fils", a.petit_fils);
i("parents", "parents", a.parents);
i("build 5 sentences that make sense using the verb 'to be' or 'having'", "construisez 5 phrases qui ont du sens en utilisant les verbes '\xeatre' ou 'avoir'", [].concat(a.construisez, a.phrases, a.qui, a.ont, a.du, a.sens, a.en_utilisant, a.verbes));
*/
// class 4 - slides page 6
/*
i("to be called", "s'appeler", [].concat(a.sappeler, slides4_page6));
i("I am called / my name is", "je m'appelle", [].concat(a.je_mappelle, slides4_page6));
i("you are called", "tu t'appelles", [].concat(a.tappelles, slides4_page6));
i("he/she/it is called", "il s'appelle", [].concat(a.il_sappelle, slides4_page6));
i("we call ourselves", "nous nous appelons", [].concat(a.nous_nous_appelons, slides4_page6));
i("you(pl) are called", "vous vous appelez", [].concat(a.vous_vous_appelez, slides4_page6));
i("they are called", "elles s'appellent", [].concat(a.elles_sappellent, slides4_page6));
//
i("to love", "aimer", [].concat(a.aimer, slides4_page6));
i("I love", "aime", [].concat(a.aime, slides4_page6));
i("you love", "aimes", [].concat(a.aimes, slides4_page6));
i("he/she/it loves", "aime", [].concat(a.aime, slides4_page6));
i("we love", "aimons", [].concat(a.aimons, slides4_page6));
i("you(pl) love", "aimez", [].concat(a.aimez, slides4_page6));
i("they love", "aiment", [].concat(a.aiment, slides4_page6));
*/
/*
//
i("to practice", "pratiquer", [].concat(a.pratiquer, slides4_page6));
i("I practice", "pratique", [].concat(a.pratique, slides4_page6));
i("you practice", "pratiques", [].concat(a.pratiques, slides4_page6));
i("he/she/it practices", "pratique", [].concat(a.pratique, slides4_page6));
i("we practice", "pratiquons", [].concat(a.pratiquons, slides4_page6));
i("you(pl) practice", "pratiquez", [].concat(a.pratiquez, slides4_page6));
i("they practice", "pratiquent", [].concat(a.pratiquent, slides4_page6));
//
i("you(pl) look at", "regardez", [].concat(a.regardez, slides4_page6));
*/
/*
// class 4 - slides page 7
i("to prefer", "pr\xe9f\xe9rer", [].concat(a.preferer, slides4_page7));
i("I prefer", "pr\xe9f\xe8re", [].concat(a.prefere, slides4_page7));
i("you prefer", "pr\xe9f\xe8res", [].concat(a.preferes, slides4_page7));
i("he/she/it prefers", "pr\xe9f\xe8re", [].concat(a.prefere, slides4_page7));
i("we prefer", "nous pr\xe9f\xe9rons", [].concat(a.preferons, slides4_page7));
i("you(pl) prefer", "pr\xe9f\xe9rez", [].concat(a.preferez, slides4_page7));
i("they prefer", "pr\xe9f\xe8rent", [].concat(a.preferent, slides4_page7));
*/
/*
// class 4 - page 10
i("my (m,s)", "mon", [].concat(a.mon, slides4_page10));
i("my (f,s)", "ma", [].concat(a.ma, slides4_page10));
i("your (m,s)", "ton", [].concat(a.ton, slides4_page10));
i("your (f,s)", "ta", [].concat(a.ta, slides4_page10));
i("his/hers/its (m,s)", "son", [].concat(a.son, slides4_page10));
i("his/her/its (f,s)", "sa", [].concat(a.sa, slides4_page10));
i("our (s)", "notre", [].concat(a.notre, slides4_page10));
i("your(pl) (s)", "votre", [].concat(a.votre, slides4_page10));
i("their (s)", "leur", [].concat(a.leur, slides4_page10));
//
i("my (pl)", "mes", [].concat(a.mes, slides4_page10));
i("your(s) (pl)", "tes", [].concat(a.tes, slides4_page10));
i("his/hers/its (pl)", "ses", [].concat(a.ses, slides4_page10));
i("our (pl)", "nos", [].concat(a.nos, slides4_page10));
i("your(pl) (pl)", "vos", [].concat(a.vos, slides4_page10));
i("their (pl)", "leurs", [].concat(a.leurs, slides4_page10));
*/
// class 4 - page 11
/*
i("January", "Janvier", a.janvier);
i("February", "F\xe9vrier", a.fevrier);
i("March", "Mars", a.mars);
i("April", "Avril", a.avril);
i("May", "Mai", a.mai);
i("June", "Juin", a.juin);
i("July", "Juillet", a.juillet);
i("August", "Ao\xfbt", a.aout);
i("September", "Septembre", a.septembre);
i("October", "Octobre", a.octobre);
i("November", "Novembre", a.novembre);
i("December", "D\xe9cembre", a.decembre);
//
// singular / masculine object
i("my love", "mon amour", a.mon_amour);
i("my darling", "mon ch\xe9ri", a.mon_cheri)
i("your computer", "ton ordinateur", a.ton_ordinateur);
i("what's your phone number", "quel est ton num\xe9ro de t\xe9l\xe9phone", a.quel_est_ton_numero_de_telephone);
i("his computer", "son ordinateur", a.son_ordinateur);
i("his trip", "son trip", a.son_trip);
//
// singular / feminine object
i("my Mom", "ma m\xe8re", a.ma_mere);
i("my wife", "ma femme", a.ma_femme);
i("your fashion", "ta mode", a.ta_mode);
i("your life", "ta vie", a.ta_vie);
i("return his jacket", "retourner sa veste", a.retourner_sa_veste);
i("his family", "sa famille", a.sa_famille);
//
// plural / singular object
i("our sugar", "notre sucre", a.notre_sucre);
i("your(pl) job", "votre travail", a.votre_travail);
i("their university", "leur universit\xe9", a.leur_universite);
//
// plural object
i("my favorites", "mes favorites", a.mes_favorites);
i("your friends", "tes amis", a.tes_amis);
i("turn its wheels", "allumer ses roues", a.allumer_ses_roues);
i("our homework", "nos devoirs", a.nos_devoirs);
i("our luggage", "nos bagages", a.nos_bagages);
i("open your books", "ouvrez vos livres", a.ouvrez_vos_livres);
i("their eyes", "leurs yeux", a.leurs_yeux);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
// class 5
i("month", "mois", a.mois);
//
i("to take", "prendre", a.prendre);
i("I take", "je prends", a.je_prends);
i("you take", "tu prends", a.tu_prends);
i("she takes", "elle prend", a.elle_prend);
i("we take", "nous prenons", a.nous_prenons);
i("you(pl) take", "vous prenez", a.vous_prenez);
i("they take", "elles prennent", a.elles_prennent);
//
i("to want", "vouloir", a.vouloir);
i("I want", "je veux", [].concat(a.je_veux, a.veux));
i("you want", "tu veux", [].concat(a.tu_veux, a.veux));
i("she wants", "elle veut", [].concat(a.elle_veut, a.veut));
i("we want", "nous voulons", [].concat(a.nous_voulons, a.voulons));
i("you(pl) want", "vous voulez", [].concat(a.vous_voulez, a.voulez));
i("they want", "elles veulent", [].concat(a.elles_veulent, a.veulent));
//
i("to go", "aller", a.aller);
i("I go", "je vais", [].concat(a.je_vais, a.vais));
i("you go", "tu vas", a.tu_vas);
i("he goes", "il va", a.il_va);
i("we go", "nous allons", a.nous_allons);
i("you(pl) go", "vous allez", a.vous_allez);
i("they go", "elles vont", a.elles_vont);
//
i("to do", "faire", a.faire);
i("I do", "je fais", a.je_fais);
i("you do", "tu fais", a.tu_fais);
i("she does", "elle fait", a.elle_fait);
i("we do", "nous faisons", a.nous_faisons);
i("you(pl) do", "vous fa\xeetes", a.vous_faites);
i("they do", "elles font", a.elles_font);
//
i("to know", "savoir", a.savoir);
i("I know", "je sais", a.je_sais);
i("you know", "tu sais", a.tu_sais);
i("she knows", "elle sait", a.elle_sait);
i("he knows", "il sait", a.il_sait);
i("we know", "nous savons", a.nous_savons);
i("you(pl) know", "vous savez", a.vous_savez);
i("they know", "elles savent", [].concat(a.elles_savent, a.ils_savent));
//
i("to be able", "pouvoir", a.pouvoir);
i("I can", "je peux", a.je_peux);
i("you can", "tu peux", a.tu_peux);
i("she can", "elle peut", a.elle_peut);
i("we can", "nous pouvons", a.nous_pouvons);
i("you(pl) can", "vous pouvez", a.vous_pouvez);
i("they can", "elles peuvent", a.elles_peuvent);
i("to read", "lire", a.lire);
i("after", "apr\xe8s", a.apres);
i("husband", "mari", a.mari);
i("son in law", "beau-fils", a.beau_fils);
i("mother in law", "belle-m\xe8re", [].concat(a.belle_mere, a.la_belle_mere, a.ma_belle_mere));
i("niece", "ni\xe8ce", a.niece);
i("nephew", "neveu", a.neveu);
i("aunt", "tante", a.tante);
i("brother in law", "beau-fr\xe8re", a.beau_frere);
i("cousin (m)", "cousin", a.cousin);
i("cousin (f)", "cousine", a.cousine);
i("a horse", "un cheval", a.un_cheval);
i("the horses", "les chevaux", a.les_chevaux);
i("the city", "la ville", a.la_ville);
i("countryside", "campagne", a.campagne);
i("noise", "bruit", a.bruit);
i("silence", "silence", a.silence);
i("to paint", "peindre", a.peindre);
i("to bike", "faire du v\xe9lo", a.faire_du_velo);
i("to surf", "faire du surf", a.faire_du_surf);
i("to swim", "nager", a.nager);
//--------------------------------------------------
//--------------------------------------------------
i("why", "pourquoi", a.pourquoi);
i("grifter/swindler", "escroc", a.escroc);
i("your favorite color", "ta couleur pr\xe9f\xe9r\xe9e", [].concat(a.couleur, a.prefere));
i("the most noteworthy or prized feature, aspect, event, article, etc. of a series or group; special item or attraction", "pi\xe8ce de r\xe9sistance", a.piece_de_resistance);
i("skeleton", "squelette", a.squelette);
*/
i("psychoanalysis", "psychanalyse", a.psychanalyse);
/*
i("saturday", "le samedi", a.le_samedi);
i("sunday", "le dimanche", a.le_dimanche);
i("go out with his friends", "sortir avec ses copains", [].concat(a.sortir, a.avec, a.ses, a.copains));
i("I stand up to say hello", "je me l\xe8ve pour dire bonjour", [].concat(a.je_me_leve, a.leve, a.pour, a.dire, a.bonjour));
*/
i("I stand up", "je me l\xe8ve", a.je_me_leve);
/*
i("coffee", "du caf\xe9", a.du_cafe);
i("how are you?", "\xe7a va?", a.ca_va);
//--------------------------------------------------
//--------------------------------------------------
// class 6 - 11.5.15
i("Christine gets up early every day", "Christine se l\xe8ve tous les jours de bonne heure", [].concat(a.leve, a.tous_les_jours, a.de_bonne_heure, a.bonne_heure));
i("early", "de bonne heure", a.de_bonne_heure);
i("every day", "tous les jours", a.tous_les_jours);
//
i("she wakes up very slowly", "elle se r\xe9veille tr\xe8s lentement", [].concat(a.elle_se_reveille_tres_lentement, a.reveille, a.tres, a.lentement));
i("wake up", "r\xe9veille", a.reveille);
i("very", "tr\xe8s", a.tres);
i("slowly", "lentement", a.lentement);
//
i("Bernard always showers in the morning", "Bernard se douche toujours le matin", [].concat("http://forvo.com/word/il_se_douche_toujours_le_matin/", a.douche, a.toujours, a.le_matin, a.matin));
i("shower", "douche", a.douche);
i("always", "toujours", a.toujours);
i("morning", "matin", [].concat(a.le_matin, a.matin));
//
i("then he shaves in front of the mirror", "ensuite, il se rase devant le miroir", [].concat(a.ensuite, a.rase, a.devant, a.miroir));
i("then", "ensuite", a.ensuite);
i("he is shaving", "il se rase", [].concat(a.il_se_rase, a.rase));
i("in front of", "devant", a.devant);
i("mirror", "miroir", a.miroir);
//
i("Camille hurries in the morning", "Camille se d\xe9p\xeache le matin", [].concat(a.depeche, a.le_matin, a.matin));
i("she hurries", "elle se d\xe9p\xeache", [].concat(a.elle_se_depeche, a.depeche));
//
// i("She always dresses very quickly because she does not like to be late for school", "elle s'habille toujours tr\xe8s vite parce qu'elle n'aime pas \xeatre en retard pour l'\xe9cole", [].concat("http://forvo.com/word/elle_s%27habille/", a.habille, a.je_mhabille, a.toujours, a.vite, a.parce, a.quelle, a.naime_pas, a.etre_en_retard, a.pour, a.lecole));
i("dresses", "habille", a.habille);
i("I dress", "je m'habille", a.je_mhabille);
i("quick", "vite", a.vite);
i("because", "parce / parce que", [].concat(a.parce, a.parce_que));
i("does not like", "n'aime pas", a.naime_pas);
i("to be late", "\xeatre en retard", a.etre_en_retard);
i("school", "l'\xe9cole", a.lecole);
*/
//
/*
i("Bernard trains at the gym three times a week", "Bernard s'entra\xeene au gymnase trois fois par semaine", [].concat(a.sentrainer, a.au, a.gymnase, a.fois, a.par_semaine));
i("train / work out", "s'entra\xeener", a.sentrainer);
i("the", "au", a.au);
i("gym", "gymnase", a.gymnase);
i("times", "fois", a.fois);
i("per week", "par semaine", a.par_semaine);
//
i("Marie brushes her teeth before going to bed", "Marie se brosse les dents avant d'aller au lit", [].concat(a.brosse, a.les_dents, a.avant, a.lheure_daller_au_lit));
i("brush", "brosse", a.brosse);
i("teeth", "les dents", a.les_dents);
i("before", "avant", a.avant);
i("bedtime", "l'heure d'aller au lit", a.lheure_daller_au_lit);
i("bed", "lit", a.lit);
//
i("Marie and Nathalie go to bed early on school days", "Marie et Nathalie se couchent t\xf4t les jours de classe", [].concat(a.se_couchent, a.tot, a.salle_de_classe));
i("they go to bed", "se couchent", a.se_couchent);
i("early", "t\xf4t", a.tot);
i("earlier", "plus t\xf4t", a.se_lever_plus_tot);
i("classroom", "salle de classe", a.salle_de_classe);
//
i("all my friends", "tous mes amis", a.tous_mes_amis);
i("library", "biblioth\xe8que", a.bibliotheque);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 7 (missed) - 11.12.15
/*
i("useful vocabulary", "vocabulaire utile", ["http://forvo.com/word/vocabulaire/#fr", "http://forvo.com/word/utile/#fr"]);
i("take the bus", "prendre l'autobus", [].concat(a.prendre, "http://forvo.com/word/l%27autobus/#fr"));
i("at the bookstore", "\xe0 la librairie", ["http://forvo.com/word/librairie/#fr"]);
i("at the theater", "au th\xe9\xe2tre", ["http://forvo.com/word/aller_au_th%C3%A9%C3%A2tre/#fr"]);
i("pay", "payer", ["http://forvo.com/word/payer/#fr"]);
*/
i("do they love to play volleyball? Yes, they love to play volleyball", "Est-ce qu'ils aiment faire du volleyball? Oui, ils aiment faire du volleyball", a.est_cequils_aiment_faire_du_volleyball);
/*
i("what do you say? I say \"it's nice out today!\"", "Qu'est-ce que tu dis? Je dis: \"il fait beau aujourd'hui!\"", ["http://forvo.com/word/qu%27est-ce_que/#fr", "http://forvo.com/word/il_fait_beau_aujourd%27hui/#fr"]);
i("it's nice out", "il fait beau", ["http://forvo.com/word/il_fait_beau/#fr"]);
i("do you eat Nutella? No, I do not eat Nutella", "Manges-tu du Nutella? Non, je ne mange pas de Nutella.");
*/
i("Who wins the Oscar for Best Actress? Julianne Moore wins the Oscar for Best Actress.", "Qui gagne l'Oscar de la meilleure actrice? Julianne Moore gagne l'Oscar de la meilleure actrice.", [].concat(a.gagne, a.meilleure, a.actrice));
/*
i("She speaks French fluently? Yes, she speaks French fluently.", "Elle parle fran\xe7ais couramment? Oui, elle parle fran\xe7ais couramment.", ["http://forvo.com/word/elle_parle/#fr", "http://forvo.com/word/couramment/#fr"]);
i("Put the following activities in the correct order", "Mettre les activit\xe9s suivantes dans le bon ordre", ["http://forvo.com/word/mettre/#fr", "http://forvo.com/word/activit%C3%A9s/#fr", "http://forvo.com/word/dans/#fr", "http://forvo.com/word/ordre/#fr"]);
i("get undressed", "se d\xe9shabiller", ["http://forvo.com/word/se_d%C3%A9shabiller/#fr"]);
i("go to bed", "se coucher", ["http://forvo.com/word/se_coucher/#fr"]);
i("dress", "s'habiller", ["http://forvo.com/word/s%27habiller/#fr"]);
i("to brush hair", "se brosser les cheveux", ["http://forvo.com/word/brosser/#fr", "http://forvo.com/word/les_cheveux/#fr"]);
i("to shave", "se raser", ["http://forvo.com/word/se_raser/#fr"]);
i("I shave", "je me rase");
i("you shave", "tu te rases", ["http://forvo.com/word/rases/#fr"]);
i("he shaves", "il se rase");
i("we shave", "nous rasons");
i("you(pl) shave", "vous rasez");
i("they shave", "ils se rasent");
i("I dress", "je m'habille", ["http://forvo.com/word/je_m%27habille/#fr"]);
i("you dress", "tu t'habilles", ["http://forvo.com/word/tu_t%27habilles/#fr"]);
i("he dresses", "il s'habille", ["http://forvo.com/word/il_s%27habille/"]);
i("we dress", "nous habillons");
i("you(pl) dress", "vous habillez", ["http://forvo.com/word/habillez/#fr"]);
i("they dress", "ils s'habillent", ["http://forvo.com/word/ils_s%27habillent/"]);
*/
/*
i("to come", "venir", ["http://forvo.com/word/venir/#fr"]);
i("I come", "je viens", ["http://forvo.com/word/je_viens_de_france/#fr"]);
i("you come", "tu viens", ["http://forvo.com/word/tu_viens/#fr"]);
i("she comes", "elle vient", ["http://forvo.com/word/elle_vient/#fr", "http://forvo.com/word/il_vient/#fr"]);
i("we come", "nous venons");
i("you(pl) come", "vous venez", ["http://forvo.com/word/vous_venez/#fr"]);
i("they come", "ils/elles viennent", ["http://forvo.com/word/viennent/#fr"]);
i("from Canada", "du Canada");
i("holiday in Italy", "en vacances en Italie", ["http://forvo.com/word/en_vacances/#fr", "http://forvo.com/word/luttes_en_italie/#fr"]);
i("their exercises", "leurs exercices", ["http://forvo.com/word/tous_les_exercices/#fr"]);
i("a croissant", "un croissant", ["http://forvo.com/word/un_croissant/#fr"]);
i("an actress", "une actrice");
i("to speak French", "parler fran\xe7ais");
i("want to eat", "envie de manger");
i("you're going on vacation in Italy", "Tu vas en vacances en Italie");
i("Justin Bieber is from Canada", "Jusin Bieber vient du Canada");
i("I can speak French", "Je peux parler fran\xe7ais");
i("students do their exercises", "Les \xe9tudiantes font leurs exercices");
i("you(pl) want a croissant", "vous voulez un croissant");
i("we want to eat", " Nous avons envie de manger");
i("Jessica Chastain is an actress", "Jessica Chastain est une actrice");
i("this (masculine)", "ce / cet", [].concat(a.ce, "http://forvo.com/word/cet/#fr"));
i("this (feminine)", "cette", ["http://forvo.com/word/cette/#fr"]);
i("these", "ces", ["http://forvo.com/word/ces/#fr"]);
i("this store is beautiful", "Ce magasin est tr\xe8s beau", ["http://forvo.com/word/magasin/#fr"]);
*/
/*
i("these books are very interesting", "Ces livres sont tr\xe8s int\xe9ressants");
i("this computer is pretty, is it not?", "Cet ordinateur est joli, n'est-ce pas ?");
i("These clothes are too expensive! This robe costs 250 euro", "Ces v\xeatements sont trop chers! Cette robe co\xfbte 250 euro", ["http://forvo.com/word/v%C3%AAtements/#fr", "http://forvo.com/word/trop/#fr", "http://forvo.com/word/chers/#fr", "http://forvo.com/word/co%C3%BBte/#fr"]);
i("These shirts are so beautiful and also these ties", "Ces chemises sont si belles et ces cravates aussi");
i("for each sentence, use the right article", "Pour chaque phrase, utiliser le bon article", ["http://forvo.com/word/chaque/#fr", "http://forvo.com/word/article/#fr"]);
i("At the supermarket, I bought tomatoes", "Au supermarch\xe9, j'ai achet\xe9 des tomates");
i("I drink water throughout the day", "Je bois de l'eau toute la journ\xe9e", ["http://forvo.com/word/l%27eau/#fr"]);
i("When I was little, I hated broccoli", "Quand j'\xe9tais petit, je d\xe9testais les brocolis");
i("Chocolate is good with banana", "Le chocolat, c'est bon avec la banane");
i("You still want some cake?", "Veux tu encore du g\xe2teau?");
i("Take salad. Take salami.", "Prends de la salade. Prends du salami.", [].concat(a.du));
i("look for the logical places", "cherchez les endroits logiques", ["http://forvo.com/word/cherchez/#fr", "http://forvo.com/word/endroits/#fr", "http://forvo.com/word/logiques/#fr"]);
i("We went skiing in winter in the mountains", "On fait du ski en hiver \xe0 la montagne");
i("We do the shopping at the mall", "Nous faisons les courses au centre commercial.");
i("We take long walks in the countryside", "On fait des longues promenades \xe0 la campagne.", [].concat("http://forvo.com/word/fait/#fr", "http://forvo.com/word/longues/#fr", "http://forvo.com/word/promenades/#fr", a.campagne));
i("We go fishing very often in the river", "On p\xeache tr\xe8s souvent dans une rivi\xe8re.");
i("We sometimes picnic under a tree", "Nous pique-niquons parfois sous un arbre.");
i("Many students are partying in the club", "Beaucoup d'\xe9tudiants font la f\xeate \xe0 la discoth\xe8que.", ["http://forvo.com/word/faire_la_f%C3%AAte/#fr", "http://forvo.com/word/discoth%C3%A8que/#fr"]);
i("We light a fire in the fireplace when it's cold", "On allume un feu quand il fait froid dans le chemin\xe9e.");
i("We study and watch TV at home.", "Nous \xe9tudions et regardons la t\xe9l\xe9 \xe0 la maison.");
i("We like to go to see films at the cinema.", "On aime aller pour voir des films au cin\xe9ma.", ["http://forvo.com/word/on/#fr", "http://forvo.com/word/voir/#fr", "http://forvo.com/word/des/#fr", "http://forvo.com/word/films/#fr", "http://forvo.com/word/au_cin%C3%A9ma/#fr"]);
i("Many people go to the gym", "Beaucoup de gens font de la gym au gymnase.", ["http://forvo.com/word/beaucoup_de_gens/", "http://forvo.com/word/gens/#fr", "http://forvo.com/word/gym/#fr", "http://forvo.com/word/gymnase/#fr"]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 8 - 11.19.15
/*
i("see you in two weeks and happy Thanksgiving", "\xe0 dans 2 semaines et joyeux Thanksgiving!", [].concat(a.a_dans_2_semaines, a.joyeux));
i("in one week", "dans une semaine", a.dans_une_semaine);
// slide 2
i("see sculptures", "voir des sculptures", a.sculptures);
i("cut their long hair", "se couper les cheveux longs", [].concat(a.se_couper, a.les_cheveux_longs, a.longs));
i("eat a good burger", "manger un bon hamburger", [].concat(a.manger_un_bon_hamburger, a.hamburger));
i("to drink a coffee", "boire un caf\xe9", a.boire_un_cafe);
i("to work", "travailler", "http://forvo.com/word/travailler/#fr");
i("shopping", "faire les courses", a.faire_les_courses);
i("read a book outside", "lire un livre \xe0 l'ext\xe9rieur", [].concat(a.lire_un_livre_a_lexterieur, a.lexterieur));
i("to relax", "se reposer", a.se_reposer);
i("fix my car", "r\xe9parer ma voiture", a.reparer_ma_voiture);
// slide 3
i("if these descriptions are true or false", "si ces descriptions sont vraies ou fausses", [].concat(a.descriptions, a.vraies, a.fausses));
i("it is in the street", "il est dans la rue");
i("post office", "bureau de poste");
i("the town hall", "la mairie", a.mairie);
i("beside / next to", "\xe0 c\xf4t\xe9", a.a_cote);
i("next to a high school", "\xe0 c\xf4t\xe9 d'un lyc\xe9e", a.a_cote_dun_lycee);
*/
i("there is a church facing the public garden", "il y a une église en face du jardin public", [].concat(a.eglise, a.en_face, "http://forvo.com/word/jardin/#fr", a.public));
i("public garden", "jardin public", ["http://forvo.com/word/jardin/#fr", "http://forvo.com/word/public/#fr"]);
i("the theater is far from the bank", "le théatre est loin de la banque", [].concat(a.le_theatre));
i("the theater", "le théâtre", a.le_theatre);
i("the library is in front of the town hall", "la bibliothêque est devant la mairie", [].concat(a.devant, a.mairie));
i("there is a sculpture under a tree, on the terrace of the museum", "il y a une sculpture sous un arbre, sur la terrasse du musée");
i("under", "sous", "http://forvo.com/word/sous/#fr");
i("tree", "arbre", "http://forvo.com/word/arbre/#fr");
i("terrace", "terrasse", "http://forvo.com/word/terrasse/#fr");
i("sculpture", "sculpture", "http://forvo.com/word/sculpture/#fr");
i("museum", "musée", "http://forvo.com/word/mus%C3%A9e/#fr");
i("on the table", "sur la table", "http://forvo.com/word/sur_la_table/#fr");
i("the hospital is behind the theater", "l'hôpital est derrière le théâtre", [].concat(a.derriere));
i("hospital", "l'hôpital", "http://forvo.com/word/l%27h%C3%B4pital/#fr");
i("behind", "derrière", a.derriere);
i("the primary school is near the public garden", "l'école primaire est près du jardin public");
i("primary school", "école primaire", "http://forvo.com/word/%C3%A9cole_primaire/#fr");
i("near", "près", "http://forvo.com/word/pr%C3%A8s/#fr");
i("there is a chimney on the roof of the church", "il y a une cheminée sur le toit de l'église");
i("chimney", "cheminée", a.la_cheminee);
i("the roof", "le toit", "http://forvo.com/word/le_toit/#fr");
i("there is a cafe between the high school and the train station", "il y a un café entre le lycée et la gare", [].concat(a.gare));
i("between", "entre", "http://forvo.com/word/entre/#fr");
i("train station", "gare", "http://forvo.com/word/gare/#fr");
// slide 4
i("use the right demonstrative adjective", "utilisez le bon adjectif démonstratif", a.adjectif_demonstratif);
i("what do you prefer? This jacket or this suit?", "Qu’est-ce que tu préfères? Cette veste ou ce costume?", [].concat(a.tu_preferes, a.cette, a.costume));
i("these shoes are very expensive", "ces chaussures sont très chères", a.cheres);
i("expensive", "chères", "http://forvo.com/word/ch%C3%A8res/#fr", a.cheres);
i("I use this computer for work", "j’utilise cet ordinateur pour travailler", a.jutilise);
//--------------------------------------------------
//--------------------------------------------------
/*
i("me neither", "moi non plus", a.moi_non_plus);
i("you neither", "toi non plus", a.toi_non_plus);
*/
i("see stars", "voir des \xe9toiles", a.voir_des_etoiles);
/*
i("word", "mot", "http://forvo.com/word/mot/#fr");
i("this morning", "ce matin", a.ce_matin);
i("I'll take this round loaf of bread [\"country bread\"]", "je vais prendre ce pain de campagne", a.pain_de_campagne);// text page 222
*/
//--------------------------------------------------
//--------------------------------------------------
convertspecialcharacters();
function convertspecialcharacters(){
    var characterlist = [
        [/è/g, "\xe8"]
        ,[/é/g, "\xe9"]
        ,[/ê/g, "\xea"]
        ,[/à/g, "\xe0"]
        ,[/â/g, "\xe2"]
        ,[/ç/g, "\xe7"]
        ,[/û/g, "\xfb"]
        ,[/î/g, "\xee"]
        ,[/ô/g, "\xf4"]
        ,[/’/g, "\u2019"]
        //
        ,[/e\`/g, "\xe8"]
        ,[/e\́/g, "\xe9"]
        ,[/e\ˆ/g, "\xea"]
        ,[/a\`/g, "\xe0"]
        ,[/a\ˆ/g, "\xe2"]
        //,[/ç/g, "\xe7"]// is there an alternative for this one?
        ,[/u\ˆ/g, "\xfb"]
        ,[/i\ˆ/g, "\xee"]
        ,[/o\ˆ/g, "\xf4"]
    ];
    data.items.forEach(function(item){
        characterlist.forEach(function(pair){
            item.definition = item.definition.replace(pair[0], pair[1]);
        });
        if(item.links){
            characterlist.forEach(function(pair){
                item.links.forEach(function(link, index){
                    item.links[index] = link.replace(pair[0], pair[1]);
                });
            });
        }
    });
}
//--------------------------------------------------
console.log("data.js was loaded");




