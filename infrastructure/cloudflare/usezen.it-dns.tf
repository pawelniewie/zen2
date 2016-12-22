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

resource "cloudflare_record" "mx_usezen_it" {
  domain = "usezen.it"
  name = "usezen.it"
  priority = 10
  value = "domains003.home.pl"
  type = "MX"
  ttl = 360
}

resource "cloudflare_record" "txt_usezen_it" {
  domain = "usezen.it"
  name = "usezen.it"
  value = "4b88750fb8c3d2c754d350d84a193915"
  type = "TXT"
  ttl = 360
}