const universities = [
    {
        "_id": "5dfd3a12ac53d54b00cc46a7",
        "name": "ABDULLAH GÜL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46a8",
        "name": "ACIBADEM MEHMET ALİ AYDINLAR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46a9",
        "name": "ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46aa",
        "name": "ADIYAMAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ab",
        "name": "AFYON KOCATEPE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ac",
        "name": "AFYONKARAHİSAR SAĞLIK BİLİMLERİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ad",
        "name": "AĞRI İBRAHİM ÇEÇEN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ae",
        "name": "AKDENİZ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46af",
        "name": "AKSARAY ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b0",
        "name": "ALANYA ALAADDİN KEYKUBAT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b4",
        "name": "ANADOLU ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b8",
        "name": "ANKARA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46bc",
        "name": "ARDAHAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c0",
        "name": "AVRASYA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c4",
        "name": "AZERBAYCAN DEVLET PEDAGOJİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c8",
        "name": "BAHÇEŞEHİR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46cc",
        "name": "BANDIRMA ONYEDİ EYLÜL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d0",
        "name": "BAYBURT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d4",
        "name": "BİLECİK ŞEYH EDEBALİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d8",
        "name": "BOĞAZİÇİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46dc",
        "name": "BURSA ULUDAĞ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e0",
        "name": "ÇANKIRI KARATEKİN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e4",
        "name": "DOĞU AKDENİZ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e8",
        "name": "EGE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ec",
        "name": "ESKİŞEHİR OSMANGAZİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f0",
        "name": "FIRAT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f4",
        "name": "GAZİANTEP ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f8",
        "name": "GİRNE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46fc",
        "name": "HALİÇ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4700",
        "name": "HİTİT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4704",
        "name": "IŞIK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4708",
        "name": "İSKENDERUN TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc470c",
        "name": "İSTANBUL BİLGİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4710",
        "name": "İSTANBUL KENT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4714",
        "name": "İSTANBUL OKAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4718",
        "name": "İSTANBUL TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc471c",
        "name": "İSTANBUL YENİ YÜZYIL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4720",
        "name": "İZMİR BAKIRÇAY ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4724",
        "name": "İZMİR YÜKSEK TEKNOLOJİ ENSTİTÜSÜ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4728",
        "name": "KAPADOKYA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc472c",
        "name": "KASTAMONU ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4730",
        "name": "KIBRIS SAĞLIK VE TOPLUM BİLİMLERİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4734",
        "name": "KIRKLARELİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4738",
        "name": "KOÇ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b1",
        "name": "ALANYA HAMDULLAH EMİN PAŞA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b7",
        "name": "ANKARA SOSYAL BİLİMLER ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46bb",
        "name": "ANTALYA BİLİM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46bf",
        "name": "ATILIM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c3",
        "name": "AZERBAYCAN DEVLET MEDENİYET VE İNCE SANAT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c7",
        "name": "AZERBAYCAN TIP ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46cb",
        "name": "BALIKESİR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46cf",
        "name": "BATMAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d3",
        "name": "BEZM-İ ÂLEM VAKIF ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d7",
        "name": "BİTLİS EREN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46db",
        "name": "BURSA TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46df",
        "name": "ÇANKAYA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e3",
        "name": "DİCLE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e7",
        "name": "DÜZCE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46eb",
        "name": "ERZURUM TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ef",
        "name": "FENERBAHÇE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f3",
        "name": "GAZİANTEP İSLAM BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f7",
        "name": "GİRNE AMERİKAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46fb",
        "name": "HAKKARİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ff",
        "name": "HATAY MUSTAFA KEMAL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4703",
        "name": "ISPARTA UYGULAMALI BİLİMLER ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4707",
        "name": "İNÖNÜ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc470b",
        "name": "İSTANBUL AYVANSARAY ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc470f",
        "name": "İSTANBUL GELİŞİM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4713",
        "name": "İSTANBUL MEDİPOL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4717",
        "name": "İSTANBUL ŞEHİR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc471b",
        "name": "İSTANBUL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc471f",
        "name": "İVANE JAVAKHİSHVİLİ TİFLİS DEVLET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4723",
        "name": "İZMİR KATİP ÇELEBİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4727",
        "name": "KAHRAMANMARAŞ SÜTÇÜ İMAM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc472b",
        "name": "KARAMANOĞLU MEHMETBEY ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b2",
        "name": "ALTINBAŞ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b5",
        "name": "ANKARA HACI BAYRAM VELİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b9",
        "name": "ANKARA YILDIRIM BEYAZIT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46bd",
        "name": "ARTVİN ÇORUH ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c1",
        "name": "AYDIN ADNAN MENDERES ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c5",
        "name": "AZERBAYCAN DİLLER ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c9",
        "name": "BAKÜ DEVLET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46cd",
        "name": "BARTIN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d1",
        "name": "BEYKENT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d5",
        "name": "BİNGÖL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d9",
        "name": "BOLU ABANT İZZET BAYSAL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46dd",
        "name": "ÇAĞ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e1",
        "name": "ÇUKUROVA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e5",
        "name": "DOĞUŞ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e9",
        "name": "ERCİYES ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ed",
        "name": "ESKİŞEHİR TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f1",
        "name": "GALATASARAY ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f5",
        "name": "GEBZE TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f9",
        "name": "GÜMÜŞHANE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46fd",
        "name": "HARRAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4701",
        "name": "HOCA AHMET YESEVİ ULUSLARARASI TÜRK-KAZAK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4705",
        "name": "İBN HALDUN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4709",
        "name": "İSTANBUL AREL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc470d",
        "name": "İSTANBUL ESENYURT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4711",
        "name": "İSTANBUL KÜLTÜR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4715",
        "name": "İSTANBUL RUMELİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4719",
        "name": "İSTANBUL TİCARET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc471d",
        "name": "İSTANBUL 29 MAYIS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4721",
        "name": "İZMİR DEMOKRASİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4725",
        "name": "KADİR HAS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4729",
        "name": "KARABÜK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc472d",
        "name": "KAYSERİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4731",
        "name": "KIBRIS SOSYAL BİLİMLER ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4735",
        "name": "KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4739",
        "name": "KOMRAT DEVLET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc473d",
        "name": "KÜTAHYA DUMLUPINAR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4741",
        "name": "MALATYA TURGUT ÖZAL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4745",
        "name": "MARMARA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b3",
        "name": "AMASYA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46b6",
        "name": "ANKARA MEDİPOL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ba",
        "name": "ANTALYA AKEV ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46be",
        "name": "ATATÜRK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c2",
        "name": "AZERBAYCAN DEVLET İKTİSAT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46c6",
        "name": "AZERBAYCAN MİMARLIK VE İNŞAAT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ca",
        "name": "BAKÜ SLAVYAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ce",
        "name": "BAŞKENT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d2",
        "name": "BEYKOZ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46d6",
        "name": "BİRUNİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46da",
        "name": "BURDUR MEHMET AKİF ERSOY ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46de",
        "name": "ÇANAKKALE ONSEKİZ MART ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e2",
        "name": "DEMİROĞLU BİLİM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46e6",
        "name": "DOKUZ EYLÜL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ea",
        "name": "ERZİNCAN BİNALİ YILDIRIM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46ee",
        "name": "FATİH SULTAN MEHMET VAKIF ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc472f",
        "name": "KIBRIS İLİM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4733",
        "name": "KIRIKKALE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f2",
        "name": "GAZİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46f6",
        "name": "GİRESUN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4737",
        "name": "KOCAELİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46fa",
        "name": "HACETTEPE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc473b",
        "name": "KONYA TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc46fe",
        "name": "HASAN KALYONCU ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc473f",
        "name": "LEFKE AVRUPA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4702",
        "name": "IĞDIR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4743",
        "name": "MANİSA CELÂL BAYAR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4747",
        "name": "MERSİN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4706",
        "name": "İHSAN DOĞRAMACI BİLKENT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc470a",
        "name": "İSTANBUL AYDIN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc474b",
        "name": "MUŞ ALPARSLAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc470e",
        "name": "İSTANBUL GEDİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc474f",
        "name": "NİĞDE ÖMER HALİSDEMİR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4712",
        "name": "İSTANBUL MEDENİYET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4753",
        "name": "ONDOKUZ MAYIS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4757",
        "name": "OSTİM TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4716",
        "name": "İSTANBUL SABAHATTİN ZAİM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc475b",
        "name": "RECEP TAYYİP ERDOĞAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc471a",
        "name": "İSTANBUL ÜNİVERSİTESİ-CERRAHPAŞA",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc475f",
        "name": "SAKARYA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc471e",
        "name": "İSTİNYE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4763",
        "name": "SİİRT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4722",
        "name": "İZMİR EKONOMİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4726",
        "name": "KAFKAS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4767",
        "name": "SÜLEYMAN DEMİREL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc472a",
        "name": "KARADENİZ TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc476b",
        "name": "TED ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc476f",
        "name": "TOROS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc472e",
        "name": "KIBRIS AMERİKAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4732",
        "name": "KIRGIZİSTAN-TÜRKİYE MANAS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4773",
        "name": "TÜRK HAVA KURUMU ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4736",
        "name": "KİLİS 7 ARALIK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4777",
        "name": "ULUSLARARASI KIBRIS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc477b",
        "name": "VAN YÜZÜNCÜ YIL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4749",
        "name": "MUĞLA SITKI KOÇMAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc477f",
        "name": "YEDİTEPE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc474d",
        "name": "NECMETTİN ERBAKAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4783",
        "name": "ZONGULDAK BÜLENT ECEVİT ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4751",
        "name": "NUH NACİ YAZGAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4755",
        "name": "ORTA DOĞU TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4759",
        "name": "PAMUKKALE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc475d",
        "name": "SAĞLIK BİLİMLERİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4761",
        "name": "SANKO ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4765",
        "name": "SİVAS CUMHURİYET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4769",
        "name": "ŞOTA RUSTAVELİ DEVLET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc476d",
        "name": "TOBB EKONOMİ VE TEKNOLOJİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4771",
        "name": "TRAKYA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4775",
        "name": "ULUSLARARASI BALKAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4779",
        "name": "UŞAK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc477d",
        "name": "YALOVA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4781",
        "name": "YOZGAT BOZOK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc473a",
        "name": "KONYA GIDA VE TARIM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc473e",
        "name": "KÜTAHYA SAĞLIK BİLİMLERİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4742",
        "name": "MALTEPE ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4746",
        "name": "MEF ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc474a",
        "name": "MUNZUR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc474e",
        "name": "NEVŞEHİR HACI BEKTAŞ VELİ ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4752",
        "name": "ODLAR YURDU ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4756",
        "name": "OSMANİYE KORKUT ATA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc475a",
        "name": "PİRİ REİS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc475e",
        "name": "SAKARYA UYGULAMALI BİLİMLER ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4762",
        "name": "SELÇUK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4766",
        "name": "SUMGAYIT DEVLET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc476a",
        "name": "TARSUS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc476e",
        "name": "TOKAT GAZİOSMANPAŞA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4772",
        "name": "TÜRK-ALMAN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4776",
        "name": "ULUSLARARASI FİNAL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc477a",
        "name": "ÜSKÜDAR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc477e",
        "name": "YAŞAR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4782",
        "name": "YÜKSEK İHTİSAS ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc473c",
        "name": "KTO KARATAY ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4740",
        "name": "LOKMAN HEKİM ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4744",
        "name": "MARDİN ARTUKLU ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4748",
        "name": "MİMAR SİNAN GÜZEL SANATLAR ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc474c",
        "name": "NAHCİVAN DEVLET ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4750",
        "name": "NİŞANTAŞI ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4754",
        "name": "ORDU ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4758",
        "name": "ÖZYEĞİN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc475c",
        "name": "SABANCI ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4760",
        "name": "SAMSUN ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4764",
        "name": "SİNOP ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4768",
        "name": "ŞIRNAK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc476c",
        "name": "TEKİRDAĞ NAMIK KEMAL ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4770",
        "name": "TRABZON ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4774",
        "name": "UFUK ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4778",
        "name": "ULUSLARARASI SARAYBOSNA ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc477c",
        "name": "YAKIN DOĞU ÜNİVERSİTESİ",
        "__v": 0
    },
    {
        "_id": "5dfd3a12ac53d54b00cc4780",
        "name": "YILDIZ TEKNİK ÜNİVERSİTESİ",
        "__v": 0
    }
]

const programs = [
    {
        "_id": "5e1e39e18cceae3fd8c0460b",
        "name": "﻿ACİL YARDIM VE AFET YÖNETİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0460c",
        "name": "ADLİ BİLİMLER"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0460d",
        "name": "ADLİ BİLİŞİM MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0460e",
        "name": "AĞAÇ İŞLERİ ENDÜSTRİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0460f",
        "name": "AİLE VE TÜKETİCİ BİLİMLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04610",
        "name": "AKTÜERYA BİLİMLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04611",
        "name": "AKTÜERYA VE RİSK YÖNETİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04612",
        "name": "AKTÜERYA"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04613",
        "name": "ALMAN DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04614",
        "name": "ALMANCA ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04615",
        "name": "AMERİKAN KÜLTÜRÜ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04616",
        "name": "ANİMASYON"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04617",
        "name": "ANİMASYON VE OYUN TASARIMI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04618",
        "name": "ANTRENÖRLÜK EĞİTİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04619",
        "name": "ANTROPOLOJİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0461a",
        "name": "ARAP DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0461b",
        "name": "ARAPÇA ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0461d",
        "name": "ARKEOLOJİ VE SANAT TARİHİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0461c",
        "name": "ARKEOLOJİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0461e",
        "name": "ARNAVUT DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0461f",
        "name": "ASTRONOMİ VE ASTROFİZİK"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04620",
        "name": "ASTRONOMİ VE UZAY BİLİMLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04621",
        "name": "AVRUPA BİRLİĞİ İLİŞKİLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04622",
        "name": "AYAKKABI TASARIMI VE ÜRETİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04623",
        "name": "AZERBAYCAN DİLİ ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04624",
        "name": "AZERBAYCAN DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04625",
        "name": "AZERBAYCAN DİLİ VE EDEBİYATI ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04626",
        "name": "AZERBAYCAN TÜRKÇESİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04627",
        "name": "BAHÇE BİTKİLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04628",
        "name": "BAHÇE BİTKİLERİ ÜRETİMİ VE PAZARLAMASI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04629",
        "name": "BAHÇE VE TARLA BİTKİLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0462a",
        "name": "BALIKÇILIK TEKNOLOJİSİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0462b",
        "name": "BANKACILIK VE FİNANS"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0462c",
        "name": "BANKACILIK VE SİGORTACILIK"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0462d",
        "name": "BANKACILIK"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0462e",
        "name": "BASIM TEKNOLOJİLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0462f",
        "name": "BASIN VE YAYIN"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04630",
        "name": "BATI DİLLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04631",
        "name": "BEDEN EĞİTİMİ VE SPOR ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04632",
        "name": "BESLENME VE DİYETETİK"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04633",
        "name": "BİLGİ GÜVENLİĞİ TEKNOLOJİSİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04634",
        "name": "BİLGİ VE BELGE YÖNETİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04635",
        "name": "BİLGİSAYAR BİLİMLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0463a",
        "name": "BİLGİSAYAR-ENFORMATİK"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04636",
        "name": "BİLGİSAYAR MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04637",
        "name": "BİLGİSAYAR TEKNOLOJİSİ VE BİLİŞİM SİSTEMLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04638",
        "name": "BİLGİSAYAR VE ÖĞRETİM TEKNOLOJİLERİ ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04639",
        "name": "BİLGİSAYAR VE YAZILIM MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0463b",
        "name": "BİLİM TARİHİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0463c",
        "name": "BİLİŞİM SİSTEMLERİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0463d",
        "name": "BİLİŞİM SİSTEMLERİ VE TEKNOLOJİLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0463e",
        "name": "BİTKİ KORUMA"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0463f",
        "name": "BİTKİSEL ÜRETİM VE TEKNOLOJİLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04640",
        "name": "BİYOENFORMATİK VE GENETİK"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04641",
        "name": "BİYOKİMYA"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04643",
        "name": "BİYOLOJİ ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04642",
        "name": "BİYOLOJİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04644",
        "name": "BİYOMEDİKAL MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04645",
        "name": "BİYOMÜHENDİSLİK"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04646",
        "name": "BİYOSİSTEM MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04647",
        "name": "BİYOTEKNOLOJİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04648",
        "name": "BİYOTEKNOLOJİ VE MOLEKÜLER BİYOLOJİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04649",
        "name": "BOŞNAK DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0464a",
        "name": "BULGAR DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0464b",
        "name": "CANLANDIRMA FİLMİ TASARIM VE YÖNETİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0464c",
        "name": "CEVHER HAZIRLAMA MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0464e",
        "name": "COĞRAFYA"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04650",
        "name": "COĞRAFYA(AÇIKÖĞRETİM)"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0464f",
        "name": "COĞRAFYA ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04651",
        "name": "ÇAĞDAŞ TÜRK LEHÇELERİ VE EDEBİYATLARI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04652",
        "name": "ÇAĞDAŞ YUNAN DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04653",
        "name": "ÇALIŞMA EKONOMİSİ VE ENDÜSTRİ İLİŞKİLERİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04654",
        "name": "ÇERKEZ DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04655",
        "name": "ÇEVİRİBİLİM"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04656",
        "name": "ÇEVRE MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04657",
        "name": "ÇİN DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04658",
        "name": "ÇİZGİ FİLM VE ANİMASYON"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0464d",
        "name": "ÇOCUK GELİŞİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c04659",
        "name": "ÇOCUK GELİŞİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0465a",
        "name": "DENİZ İŞLETMECİLİĞİ VE YÖNETİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0465b",
        "name": "DENİZ ULAŞTIRMA İŞLETME MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0465c",
        "name": "DENİZCİLİK İŞLETMELERİ YÖNETİMİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0465d",
        "name": "DERİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e18cceae3fd8c0465e",
        "name": "DİJİTAL OYUN TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0465f",
        "name": "DİL VE KONUŞMA TERAPİSİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04661",
        "name": "DİLBİLİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04660",
        "name": "DİLBİLİM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04662",
        "name": "DİNİ İLİMLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04663",
        "name": "DİŞ HEKİMLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04664",
        "name": "DOĞU DİLLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04665",
        "name": "EBELİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04666",
        "name": "ECZACILIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04667",
        "name": "EKONOMETRİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04669",
        "name": "EKONOMİ VE FİNANS"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04668",
        "name": "EKONOMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0466a",
        "name": "EL SANATLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0466b",
        "name": "EL SANATLARI TASARIMI VE ÜRETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0466d",
        "name": "ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0466c",
        "name": "ELEKTRİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0466e",
        "name": "ELEKTRONİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0466f",
        "name": "ELEKTRONİK TİCARET VE TEKNOLOJİ YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04670",
        "name": "ELEKTRONİK VE HABERLEŞME MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04671",
        "name": "ENDÜSTRİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04672",
        "name": "ENDÜSTRİ ÜRÜNLERİ TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04673",
        "name": "ENDÜSTRİYEL TASARIM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04674",
        "name": "ENDÜSTRİYEL TASARIM MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04675",
        "name": "ENERJİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04676",
        "name": "ENERJİ SİSTEMLERİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04677",
        "name": "ENERJİ YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04678",
        "name": "ERGOTERAPİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04679",
        "name": "ERMENİ DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0467a",
        "name": "ERMENİ DİLİ VE KÜLTÜRÜ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0467b",
        "name": "ESKİ YUNAN DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0467c",
        "name": "EŞİT AĞIRLIKLI PROGRAMLAR"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0467d",
        "name": "FARS DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0467e",
        "name": "FELSEFE"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0467f",
        "name": "FELSEFE GRUBU ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04680",
        "name": "FEN BİLGİSİ ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04681",
        "name": "FİLM TASARIM VE YAZARLIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04682",
        "name": "FİLM TASARIM VE YÖNETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04683",
        "name": "FİLM TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04684",
        "name": "FİNANS VE BANKACILIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04686",
        "name": "FİZİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04687",
        "name": "FİZİK ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04685",
        "name": "FİZİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04688",
        "name": "FİZYOTERAPİ VE REHABİLİTASYON"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04689",
        "name": "FOTOĞRAF"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0468a",
        "name": "FOTOĞRAF VE VİDEO"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0468b",
        "name": "FOTONİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0468c",
        "name": "FRANSIZ DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0468d",
        "name": "FRANSIZCA ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0468e",
        "name": "GASTRONOMİ VE MUTFAK SANATLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0468f",
        "name": "GASTRONOMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04690",
        "name": "GAYRİMENKUL GELİŞTİRME VE YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04691",
        "name": "GAYRİMENKUL VE VARLIK DEĞERLEME"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04692",
        "name": "GAZETECİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04693",
        "name": "GELENEKSEL TÜRK SANATLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04694",
        "name": "GEMİ İNŞAATI VE GEMİ MAKİNELERİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04695",
        "name": "GEMİ MAKİNELERİ İŞLETME MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04696",
        "name": "GEMİ VE DENİZ TEKNOLOJİSİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04697",
        "name": "GEMİ VE YAT TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04698",
        "name": "GENETİK VE BİYOMÜHENDİSLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04699",
        "name": "GENETİK VE YAŞAM BİLİMLERİ PROGRAMLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0469a",
        "name": "GEOMATİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0469b",
        "name": "GERONTOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0469c",
        "name": "GIDA MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0469d",
        "name": "GIDA TEKNOLOJİSİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0469e",
        "name": "GİRİŞİMCİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a0",
        "name": "GÖRSEL İLETİŞİM TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0469f",
        "name": "GÖRSEL İLETİŞİM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a2",
        "name": "GÖRSEL SANATLAR VE GÖRSEL İLETİŞİM TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a3",
        "name": "GÖRSEL SANATLAR VE İLETİŞİM TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a1",
        "name": "GÖRSEL SANATLAR"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a5",
        "name": "GRAFİK TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a4",
        "name": "GRAFİK TASARIM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a6",
        "name": "GÜMRÜK İŞLETME"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a7",
        "name": "GÜRCÜ DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a8",
        "name": "GÜVERTE"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046a9",
        "name": "HALKLA İLİŞKİLER VE REKLAMCILIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046aa",
        "name": "HALKLA İLİŞKİLER VE TANITIM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ab",
        "name": "HARİTA MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ac",
        "name": "HAVACILIK ELEKTRİK VE ELEKTRONİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ad",
        "name": "HAVACILIK ELEKTRONİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ae",
        "name": "HAVACILIK VE UZAY MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046af",
        "name": "HAVACILIK YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b0",
        "name": "HAYVANSAL ÜRETİM VE TEKNOLOJİLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b1",
        "name": "HAYVANSAL ÜRETİM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b2",
        "name": "HEMŞİRELİK VE SAĞLIK HİZMETLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b3",
        "name": "HEMŞİRELİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b4",
        "name": "HİDROJEOLOJİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b5",
        "name": "HİNDOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b6",
        "name": "HİTİTOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b7",
        "name": "HUKUK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b8",
        "name": "HUNGAROLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046b9",
        "name": "İBRANİ DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046bb",
        "name": "İÇ MİMARLIK VE ÇEVRE TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ba",
        "name": "İÇ MİMARLIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046bc",
        "name": "İKTİSAT"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046bd",
        "name": "İLAHİYAT"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046bf",
        "name": "İLETİŞİM BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c1",
        "name": "İLETİŞİM TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c2",
        "name": "İLETİŞİM TASARIMI VE MEDYA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c3",
        "name": "İLETİŞİM TASARIMI VE YENİ MEDYA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c4",
        "name": "İLETİŞİM TASARIMI VE YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c5",
        "name": "İLETİŞİM VE TASARIM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046be",
        "name": "İLETİŞİM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c0",
        "name": "İLETİŞİM SANATLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c6",
        "name": "İLKÖĞRETİM MATEMATİK ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c7",
        "name": "İMALAT MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c8",
        "name": "İNGİLİZ DİL BİLİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046c9",
        "name": "İNGİLİZ DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ca",
        "name": "İNGİLİZ DİLİ VE KARŞILAŞTIRMALI EDEBİYAT"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046cb",
        "name": "İNGİLİZ VE RUS DİLLERİ VE EDEBİYATLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046cc",
        "name": "İNGİLİZCE ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046cd",
        "name": "İNSAN KAYNAKLARI YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ce",
        "name": "İNSAN VE TOPLUM BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046cf",
        "name": "İNŞAAT MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d0",
        "name": "İSLAM BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d1",
        "name": "İSLAM EKONOMİSİ VE FİNANS"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d2",
        "name": "İSLAM VE DİN BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d3",
        "name": "İSLAMİ İLİMLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d4",
        "name": "İSPANYOL DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d5",
        "name": "İSTATİSTİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d6",
        "name": "İSTATİSTİK VE BİLGİSAYAR BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d7",
        "name": "İŞ SAĞLIĞI VE GÜVENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046dc",
        "name": "İŞLETME YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d8",
        "name": "İŞLETME"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046d9",
        "name": "İŞLETME BİLGİ YÖNETİMİ(YÜKSEKOKUL)"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046da",
        "name": "İŞLETME ENFORMATİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046dd",
        "name": "İŞLETME-EKONOMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046db",
        "name": "İŞLETME MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046de",
        "name": "İTALYAN DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046df",
        "name": "JAPON DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e0",
        "name": "JAPONCA ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e1",
        "name": "JEOFİZİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e2",
        "name": "JEOLOJİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e3",
        "name": "KAMU YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e4",
        "name": "KANATLI HAYVAN YETİŞTİRİCİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e5",
        "name": "KARŞILAŞTIRMALI EDEBİYAT"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e6",
        "name": "KAZAK DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e7",
        "name": "KENTSEL TASARIM VE PEYZAJ MİMARLIĞI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ed",
        "name": "KİMYA-BİYOLOJİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e8",
        "name": "KİMYA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046e9",
        "name": "KİMYA MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ea",
        "name": "KİMYA MÜHENDİSLİĞİ VE UYGULAMALI KİMYA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046eb",
        "name": "KİMYA ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ec",
        "name": "KİMYA VE SÜREÇ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ee",
        "name": "KLASİK ARKEOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ef",
        "name": "KONAKLAMA İŞLETMECİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f0",
        "name": "KONAKLAMA VE TURİZM İŞLETMECİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f1",
        "name": "KONTROL VE OTOMASYON MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f2",
        "name": "KORE DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f3",
        "name": "KURGU-SES VE GÖRÜNTÜ YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f4",
        "name": "KUYUMCULUK VE MÜCEVHER TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f5",
        "name": "KUYUMCULUK VE MÜCEVHERAT TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f6",
        "name": "KÜLTÜR VARLIKLARINI KORUMA VE ONARIM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f7",
        "name": "KÜLTÜR VE İLETİŞİM BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f8",
        "name": "KÜRESEL SİYASET VE ULUSLARARASI İLİŞKİLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046f9",
        "name": "KÜRT DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046fa",
        "name": "LATİN DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046fb",
        "name": "LEH DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046fc",
        "name": "LİF VE POLİMER MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046fe",
        "name": "LOJİSTİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046fd",
        "name": "LOJİSTİK YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c046ff",
        "name": "MADEN MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04700",
        "name": "MAKİNE MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04701",
        "name": "MAKİNE VE İMALAT MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04702",
        "name": "MALİYE"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04703",
        "name": "MALZEME BİLİMİ VE MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04704",
        "name": "MALZEME BİLİMİ VE NANOTEKNOLOJİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04705",
        "name": "MALZEME BİLİMİ VE TEKNOLOJİLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04706",
        "name": "MALZEME MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0470b",
        "name": "MATEMATİK-BİLGİSAYAR"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04708",
        "name": "MATEMATİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04707",
        "name": "MATEMATİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04709",
        "name": "MATEMATİK ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0470a",
        "name": "MATEMATİK VE BİLGİSAYAR BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0470c",
        "name": "MEDYA VE GÖRSEL SANATLAR"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0470d",
        "name": "MEDYA VE İLETİŞİM(FAKÜLTE)"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0470e",
        "name": "MEDYA VE İLETİŞİM(YÜKSEKOKUL)"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0470f",
        "name": "MEKATRONİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04710",
        "name": "MEKATRONİK SİSTEMLER MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04711",
        "name": "METALURJİ VE MALZEME MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04712",
        "name": "METEOROLOJİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04713",
        "name": "MİMARLIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04714",
        "name": "MODA TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04715",
        "name": "MODA VE TEKSTİL TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04716",
        "name": "MOLEKÜLER BİYOLOJİ VE GENETİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04717",
        "name": "MOLEKÜLER BİYOTEKNOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0471b",
        "name": "MUHASEBE"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04718",
        "name": "MUHASEBE BİLGİ SİSTEMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0471a",
        "name": "MUHASEBE VE FİNANS YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04719",
        "name": "MUHASEBE VE DENETİM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0471c",
        "name": "MUTFAK SANATLARI VE YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0471d",
        "name": "MÜHENDİSLİK PROGRAMLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0471e",
        "name": "MÜHENDİSLİK VE DOĞA BİLİMLERİ PROGRAMLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0471f",
        "name": "MÜTERCİM-TERCÜMANLIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04720",
        "name": "MÜZECİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04721",
        "name": "NANOBİLİM VE NANOTEKNOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04722",
        "name": "NANOTEKNOLOJİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04723",
        "name": "NÜKLEER ENERJİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04724",
        "name": "ODYOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04725",
        "name": "OKUL ÖNCESİ ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04726",
        "name": "OPTİK VE AKUSTİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04727",
        "name": "ORGANİK TARIM İŞLETMECİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04728",
        "name": "ORMAN ENDÜSTRİSİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04729",
        "name": "ORMAN MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0472a",
        "name": "ORTEZ-PROTEZ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0472b",
        "name": "OTEL YÖNETİCİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0472c",
        "name": "OTOMOTİV MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0472d",
        "name": "ÖZEL EĞİTİM ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0472e",
        "name": "PAZARLAMA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0472f",
        "name": "PERFÜZYON"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04730",
        "name": "PETROL VE DOĞALGAZ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04731",
        "name": "PEYZAJ MİMARLIĞI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04732",
        "name": "PİLOTAJ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04733",
        "name": "POLİMER MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04734",
        "name": "POLİTİKA VE EKONOMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04735",
        "name": "POLONYA DİLİ VE KÜLTÜRÜ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04736",
        "name": "PROTOHİSTORYA VE ÖN ASYA ARKEOLOJİSİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04738",
        "name": "PSİKOLOJİK DANIŞMANLIK VE REHBERLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04737",
        "name": "PSİKOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04739",
        "name": "PSİKOLOJİK DANIŞMANLIK VE REHBERLİK ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0473b",
        "name": "RADYO, TELEVİZYON VE SİNEMA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0473a",
        "name": "RADYO VE TELEVİZYON"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0473c",
        "name": "RAYLI SİSTEMLER MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0473d",
        "name": "REHBERLİK VE PSİKOLOJİK DANIŞMANLIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0473e",
        "name": "REKLAM TASARIMI VE İLETİŞİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0473f",
        "name": "REKLAMCILIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04740",
        "name": "REKLAMCILIK VE HALKLA İLİŞKİLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04741",
        "name": "REKREASYON YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04742",
        "name": "REKREASYON"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04743",
        "name": "RESTORASYON VE KONSERVASYON"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04744",
        "name": "RUS DİLİ ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04745",
        "name": "RUS DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04746",
        "name": "RUS DİLİ VE EDEBİYATI ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04747",
        "name": "RUS VE İNGİLİZ DİLLERİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04748",
        "name": "SAĞLIK YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04749",
        "name": "SANAT TARİHİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0474a",
        "name": "SANAT VE KÜLTÜR YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0474b",
        "name": "SANAT VE SOSYAL BİLİMLER PROGRAMLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0474c",
        "name": "SANAT YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0474d",
        "name": "SERAMİK TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0474e",
        "name": "SERMAYE PİYASALARI VE PORTFÖY YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0474f",
        "name": "SERMAYE PİYASASI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04751",
        "name": "SEYAHAT İŞLETMECİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04750",
        "name": "SEYAHAT İŞLETMECİLİĞİ VE TURİZM REHBERLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04752",
        "name": "SINIF ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04756",
        "name": "SİGORTACILIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04753",
        "name": "SİGORTACILIK VE AKTÜERYA BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04754",
        "name": "SİGORTACILIK VE RİSK YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04755",
        "name": "SİGORTACILIK VE SOSYAL GÜVENLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04757",
        "name": "SİNEMA VE DİJİTAL MEDYA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04758",
        "name": "SİNEMA VE TELEVİZYON"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04759",
        "name": "SİNOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0475a",
        "name": "SİYASAL BİLİMLER VE ULUSLARARASI İLİŞKİLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0475c",
        "name": "SİYASET BİLİMİ VE KAMU YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0475d",
        "name": "SİYASET BİLİMİ VE ULUSLARARASI İLİŞKİLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0475b",
        "name": "SİYASET BİLİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0475e",
        "name": "SOSYAL BİLGİLER ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0475f",
        "name": "SOSYAL HİZMET"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04760",
        "name": "SOSYAL VE SİYASAL BİLİMLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04761",
        "name": "SOSYOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04762",
        "name": "SPOR BİLİMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04763",
        "name": "SPOR YÖNETİCİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04764",
        "name": "SU BİLİMLERİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04765",
        "name": "SU ÜRÜNLERİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04766",
        "name": "SÜMEROLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04767",
        "name": "SÜRYANİ DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04768",
        "name": "SÜT TEKNOLOJİSİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04769",
        "name": "ŞEHİR VE BÖLGE PLANLAMA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0476a",
        "name": "TAKI TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0476b",
        "name": "TAPU KADASTRO"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0476c",
        "name": "TARIM EKONOMİSİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0476d",
        "name": "TARIM MAKİNELERİ VE TEKNOLOJİLERİ MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0476e",
        "name": "TARIM TİCARETİ VE İŞLETMECİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0476f",
        "name": "TARIMSAL BİYOTEKNOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04770",
        "name": "TARIMSAL GENETİK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04771",
        "name": "TARIMSAL YAPILAR VE SULAMA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04772",
        "name": "TARİH"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04773",
        "name": "TARİH ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04774",
        "name": "TARİH ÖNCESİ ARKEOLOJİSİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04775",
        "name": "TARLA BİTKİLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04776",
        "name": "TAŞINABİLİR KÜLTÜR VARLIKLARINI KORUMA VE ONARIM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04777",
        "name": "TEKNOLOJİ VE BİLGİ YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04778",
        "name": "TEKSTİL MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04779",
        "name": "TEKSTİL TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0477a",
        "name": "TEKSTİL VE MODA TASARIMI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0477b",
        "name": "TELEVİZYON HABERCİLİĞİ VE PROGRAMCILIĞI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0477c",
        "name": "TIP"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0477d",
        "name": "TIP MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0477e",
        "name": "TİYATRO ELEŞTİRMENLİĞİ VE DRAMATURJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0477f",
        "name": "TOHUM BİLİMİ VE TEKNOLOJİSİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04780",
        "name": "TOPRAK BİLİMİ VE BİTKİ BESLEME"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04782",
        "name": "TURİZM İŞLETMECİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04781",
        "name": "TURİZM İŞLETMECİLİĞİ VE OTELCİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04783",
        "name": "TURİZM REHBERLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04784",
        "name": "TURİZM VE OTEL İŞLETMECİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04785",
        "name": "TURİZM VE OTELCİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04786",
        "name": "TÜRK DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04787",
        "name": "TÜRK DİLİ VE EDEBİYATI ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04788",
        "name": "TÜRK HALKBİLİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04789",
        "name": "TÜRK İSLAM ARKEOLOJİSİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0478a",
        "name": "TÜRKÇE ÖĞRETMENLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0478b",
        "name": "TÜRKOLOJİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0478c",
        "name": "TÜTÜN EKSPERLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0478d",
        "name": "UÇAK BAKIM VE ONARIM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0478e",
        "name": "UÇAK ELEKTRİK-ELEKTRONİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0478f",
        "name": "UÇAK GÖVDE-MOTOR BAKIM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04790",
        "name": "UÇAK MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04791",
        "name": "UÇAK VE UZAY MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04792",
        "name": "UKRAYNA DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04793",
        "name": "ULAŞTIRMA MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04794",
        "name": "ULAŞTIRMA VE LOJİSTİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04796",
        "name": "ULUSLARARASI EKONOMİK İLİŞKİLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04795",
        "name": "ULUSLARARASI EKONOMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04797",
        "name": "ULUSLARARASI FİNANS VE BANKACILIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04798",
        "name": "ULUSLARARASI FİNANS"
    },
    {
        "_id": "5e1e39e28cceae3fd8c04799",
        "name": "ULUSLARARASI GİRİŞİMCİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0479a",
        "name": "ULUSLARARASI İLİŞKİLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0479b",
        "name": "ULUSLARARASI İŞLETME YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0479d",
        "name": "ULUSLARARASI İŞLETMECİLİK VE TİCARET"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0479c",
        "name": "ULUSLARARASI İŞLETMECİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0479e",
        "name": "ULUSLARARASI LOJİSTİK VE TAŞIMACILIK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c0479f",
        "name": "ULUSLARARASI LOJİSTİK YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a0",
        "name": "ULUSLARARASI TİCARET VE FİNANS"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a1",
        "name": "ULUSLARARASI TİCARET VE İŞLETMECİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a2",
        "name": "ULUSLARARASI TİCARET VE LOJİSTİK YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a4",
        "name": "ULUSLARARASI TİCARET"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a3",
        "name": "ULUSLARARASI TİCARET VE LOJİSTİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a5",
        "name": "ULUSLARARASI ULAŞTIRMA SİSTEMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a6",
        "name": "URDU DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a7",
        "name": "UZAY BİLİMLERİ VE TEKNOLOJİLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a8",
        "name": "UZAY MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047a9",
        "name": "VETERİNERLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047aa",
        "name": "YABAN HAYATI EKOLOJİSİ VE YÖNETİMİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047ab",
        "name": "YAPAY ZEKA MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047ac",
        "name": "YAZILIM GELİŞTİRME"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047ad",
        "name": "YAZILIM MÜHENDİSLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b0",
        "name": "YENİ MEDYA"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047ae",
        "name": "YENİ MEDYA VE GAZETECİLİK"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047af",
        "name": "YENİ MEDYA VE İLETİŞİM"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b1",
        "name": "YER BİLİMLERİ MÜHENDİSLİĞİ PROGRAMLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b2",
        "name": "YEREL YÖNETİMLER"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b3",
        "name": "YİYECEK-İÇECEK İŞLETMECİLİĞİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b4",
        "name": "YÖNETİM BİLİMLERİ PROGRAMLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b5",
        "name": "YÖNETİM BİLİŞİM SİSTEMLERİ"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b6",
        "name": "YUNAN DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b7",
        "name": "ZAZA DİLİ VE EDEBİYATI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b8",
        "name": "ZİRAAT MÜHENDİSLİĞİ PROGRAMLARI"
    },
    {
        "_id": "5e1e39e28cceae3fd8c047b9",
        "name": "ZOOTEKNİ"
    }
]

export {universities,programs};