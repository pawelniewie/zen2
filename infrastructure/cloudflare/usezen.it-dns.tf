resource "cloudflare_record" "root_usezen_it" {
  domain = "usezen.it"
  name = "usezen.it"
  value = "usezen.it.herokudns.com"
  type = "CNAME"
  ttl = 360
}

resource "cloudflare_record" "www_usezen_it" {
  domain = "usezen.it"
  name = "www.usezen.it"
  value = "www.usezen.it.herokudns.com"
  type = "CNAME"
  ttl = 360
}

resource "cloudflare_record" "wildcard_usezen_it" {
  domain = "usezen.it"
  name = "*.usezen.it"
  value = "wildcard.usezen.it.herokudns.com"
  type = "CNAME"
  ttl = 360
}

resource "cloudflare_record" "certum_usezen_it" {
  domain = "usezen.it"
  name = "usezen.it"
  value = "4b88750fb8c3d2c754d350d84a193915"
  type = "TXT"
  ttl = 360
}

resource "cloudflare_record" "spf_usezen_it" {
  domain = "usezen.it"
  name = "usezen.it"
  value = "v=spf1 include:mailgun.org ~all"
  type = "TXT"
  ttl = 360
}

resource "cloudflare_record" "spf_mail_usezen_it" {
  domain = "usezen.it"
  name = "mail.usezen.it"
  value = "v=spf1 include:mailgun.org ~all"
  type = "TXT"
  ttl = 360
}

resource "cloudflare_record" "dkey_mail_usezen_it" {
  domain = "usezen.it"
  name = "mailo._domainkey.mail.usezen.it"
  value = "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzHaBAo2jMdBPtuzO3pOrYfVqlaVZMBKOFSr/XGXQmHILuo1Pyg7PDAO9AEp7TSV2GLo3mRyXgGsjFtm6lnYyFLM82zczqAIc2Akq7vE/Rykhb48oRFsyveD55nu1OKq8I1bohWaxLV18pGsGgRJ04DJf3An/7t5AAAGnVPsYhHwIDAQAB"
  type = "TXT"
  ttl = 360
}

resource "cloudflare_record" "email_mail_usezen_it" {
  domain = "usezen.it"
  name = "email.mail.usezen.it"
  value = "mailgun.org"
  type = "CNAME"
  ttl = 360
}

resource "cloudflare_record" "mxa_usezen_it" {
  domain = "usezen.it"
  name = "mail.usezen.it"
  priority = 10
  value = "mxa.mailgun.org"
  type = "MX"
  ttl = 360
}

resource "cloudflare_record" "mxb_usezen_it" {
  domain = "usezen.it"
  name = "mail.usezen.it"
  priority = 10
  value = "mxb.mailgun.org"
  type = "MX"
  ttl = 360
}

resource "cloudflare_record" "deleteGAPPSnotBefore20170608utc_usezen_it" {
  domain = "usezen.it"
  name = "deleteGAPPSnotBefore20170608utc.usezen.it"
  value = "case-12892002-for-usezen.it-at.google.com"
  type = "CNAME"
  ttl = 360
}

resource "cloudflare_record" "gsuite_veritication_usezen_it" {
  domain = "usezen.it"
  name = "sfo537gpaaqd.usezen.it"
  value = "gv-feitkpzwvdd4hn.dv.googlehosted.com"
  type = "CNAME"
  ttl = 360
}