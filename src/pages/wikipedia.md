---
title: wikipedia
categories:
  saved:
    - title: A Million Random Digits with 100,000 Normal Deviates
      id: 1354812
      description: Random number book first published in 1955
    - title: Blinkenlights
      id: 993408
      description: Hacker jargon for computerised blinking lights
    - title: Code page 437
      id: 1028188
      description: Character set of the original IBM PC
    - title: Codex Seraphinianus
      id: 73192
      description: Illustrated encyclopedia by Luigi Serafini
    - title: Cosmic latte
      id: 1643492
      description: Average color of the universe
    - title: Cuttle
      id: 40875921
      description: Card game
    - title: Don't Copy That Floppy
      id: 3066510
      description: Software anti-piracy campaign
    - title: Doomsday rule
      id: 626579
      description: Way of calculating the day of the week of a given date
    - title: Dovecote
      id: 2130253
      description: Structure intended to house pigeons or doves
    - title: Dymaxion Chronofile
      id: 7947445
      description: Diary of Buckminster Fuller
    - title: Epiphyllum oxypetalum
      id: 8036367
      description: Species of cactus
    - title: Frequency illusion
      id: 61544571
      description: Cognitive bias. See also <a href="https://en.wikipedia.org/wiki/Magical_thinking">Magical thinking</a>.
    - title: Got the morbs
      id: 71938541
      description: Victorian slang phrase describing sadness
    - title: Grimoire
      id: 12284
      description: Book of magic spells, invocations, and talismans
    - title: Hammerspace
      id: 13180731
      description: Instantly accessible storage area of unknown dimension
    - title: Here be dragons
      id: 1764568
      description: Phrase used on maps to indicate uncharted areas
    - title: In situ resource utilization
      id: 5333892
      description: Astronautical use of materials harvested in outer space
    - title: Last Ent of Affric
      id: 67670902
      description: Ancient elm in the Scottish Highlands
    - title: Martian packet
      id: 509688
      description: IP packet on the public internet
    - title: MareNostrum
      id: 1148438
      description: Supercomputer in the Barcelona Supercomputing Center
    - title: Mojibake
      id: 186415
      description: Garbled text as a result of incorrect character encodings
    - title: Mundaneum
      id: 3585614
      description: Institution aimed to gather together all the world's knowledge founded in 1910
    - title: Northwest Angle
      id: 238699
      description: Part of Minnesota, separated from the rest of the state by the Lake of the Woods
    - title: On the Internet, nobody knows you're a dog
      id: 13532651
      description: Adage and meme about internet anonymity
    - title: Polybius (urban legend)
      id: 1543002
      description: Fictitious 1981 arcade game
    - title: Precordial catch syndrome
      id: 5345702
      description: Medical condition
    - title: Sehnsucht
      id: 18544049
      description: German noun for an emotion of longing
    - title: Splooting
      id: 74294082
      description: Neologism for animal posture
    - title: Telling the bees
      id: 40781149
      description: Traditional European custom
    - title: ꙮ
      id: 18214347
      description: Multiocular O
    - title: List of humorous units of measurement
      id: 7830588
      description: Unconventional units of measurement intended as humor
  animals:
    - title: Great auk
      id: 12552
      description: Extinct flightless seabird from the North Atlantic
    - title: Leatherback sea turtle
      id: 322578
      description: Species of marine reptile in the family Chelonioidea
    - title: Old Tom (orca)
      id: 4887923
      description: Killer whale known to Australian whalers
    - title: Swedish Vallhund
      id: 235872
      description: Dog breed
    - title: Canuck the Crow
      id: 69385068
      description: Celebrated bird and unofficial 2018 ambassador of Vancouver, Canada
  watchlist:
    - title: Community Memory
      id: 4621964
      description: Public computerized bulletin board system
    - title: List of films featuring giant monsters
      id: 9269204
    - title: Películas de Ecuador
      id: 9632660
      lang: es
      slug: Anexo:Pel%C3%ADculas_de_Ecuador
  special:
    - title: Unusual Articles
      slug: Wikipedia:Unusual_articles
      id: 154126
    - title: Special:Random
      description: This will take you to a random wikipedia page. See also <a href="https://en.wikipedia.org/wiki/Wikipedia:Random">Wikipedia:Random</a>
---
{% for category, items in categories %}
<section>
  <h2>{{ category }}</h2>
  <dl>
    {% for item in items -%}
    <dt><a href="https://{{ item.lang or 'en' }}.wikipedia.org/wiki/{{ item.slug or (item.title | replace(' ', '_') ) }}">{{ item.title }}</a></dt>
    {%- if item.description %}
    <dd>{{ item.description | safe }}</dd>
    {%- endif %}
    {% endfor %}
  </dl>
</section>
{% endfor %}