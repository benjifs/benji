---
title: "The Grumpy Snail"
layout: layouts/base.njk
featured: https://gatherer-static.wizards.com/Cards/medium/954044C7AEB75C68A0ABF09B32FBA5A8BBAE438B4783A3CAACC89700C5E097B2.webp
decklist:
  Commander:
    - 1|Wick, the Whorled Mind|3B
  Artifact:
    - 1|Arcade Cabinet|3
    - 1|Arcane Signet|2
    - 1|Dimir Signet|2
    - 1|Herald's Horn|3
    - 1|Izzet Signet|2
    - 1|Patchwork Banner|3
    - 1|Rakdos Signet|2
    - 1|Skullclamp|1
    - 1|Sol Ring|1
  Creature:
    - 1|Bloodline Pretender|3
    - 1|Burglar Rat|1B
    - 1|Changeling Outcast|B
    - 1|Chittering Witch|3B
    - 1|Daggerfang Duo|2B
    - 1|Engine Rat|B
    - 1|Gnawing Vermin|B
    - 1|Karumonix, the Rat King|1BB
    - 1|Lord Skitter, Sewer King|2B
    - 1|Lord Skitter's Butcher|2B
    - 1|Mad Ratter|3R
    - 1|Mindwhisker|2U
    - 1|Mirkwood Bats|3B
    - 1|Mothdust Changeling|U
    - 1|Nezumi Informant|1B
    - 1|Nezumi Prowler|1B
    - 1|Ogre Slumlord|3B
    - 1|Pack Rat|1B
    - 1|Persistent Marshstalker|1B
    - 1|Piper of the Swarm|1B
    - 1|Rat King, Verminister|1B
    - 1|Ratcatcher Trainee|1R/2R
    - 1|Shoreline Looter|1U
    - 1|Tangled Colony|1B
    - 1|Taurean Mauler|2R
    - 1|Totentanz, Swarm Piper|1BR
    - 1|Voracious Vermin|2B
    - 1|Vren, the Relentless|2UB
  Enchantment:
    - 1|Collective Inferno|3RR
    - 1|Conspiracy|3BB
    - 1|Goblin Bombardment|1R
    - 1|Impact Tremors|1R
    - 1|Shared Animosity|2R
  Instant:
    - 1|Bulk Up|1R
    - 1|Chaos Warp|2R
    - 1|Corrupted Conviction|B
    - 1|Counterspell|UU
    - 1|Gnawing Crescendo|2R
    - 1|Go for the Throat|1B
    - 1|Rabid Gnaw|1R
    - 1|Rat Out|B
    - 1|Tainted Strike|B
    - 1|Terminate|BR
    - 1|Unleash Fury|1R
    - 1|Village Rites|B
  Sorcery:
    - 1|Faithless Looting|1R
    - 1|Revenge of the Rats|2BB
    - 1|Song of Totentanz|XR
  Land:
    - 1|Command Tower
    - 1|Crumbling Necropolis
    - 1|Crypt of the Eternals
    - 1|Dragonskull Summit
    - 1|Drowned Catacomb
    - 1|Exotic Orchard
    - 1|Graven Cairns
    - 4|Island
    - 1|Maestros Theater
    - 5|Mountain
    - 1|Oscorp Industries
    - 1|Path of Ancestry
    - 1|Scorched Geyser
    - 1|Seething Landscape
    - 1|Shivan Reef
    - 1|Smoldering Marsh
    - 1|Stormcarved Coast
    - 1|Sulfur Falls
    - 1|Sulfurous Springs
    - 1|Sunken Hollow
    - 1|Sunken Ruins
    - 6|Swamp
    - 1|Temple of Deceit
    - 1|Temple of Epiphany
    - 1|Temple of Malice
    - 1|Underground River
  Sideboard:
    - 1|Blade of the Bloodchief|1
    - 1|Bonesplitter|1
    - 1|Grafted Wargear|3
    - 1|Heirloom Blade|3
---

<style>
    h2 { text-transform: capitalize }
    table {
        margin: initial;
        width: 100%;
    }
    th { display: none }
    tr td:first-child { width: 2ch }
    tr td:last-child { max-width: 150px; text-align: right }
    table img {
        display: inline-block;
        max-width: 20px;
        margin-left: 2px;
    }
</style>
<h1>{{ title }}</h1>
{% if featured %}
<img src="{{ featured }}" width=250>
{% endif %}
{% for category, cards in decklist %}
<section>
  <h2>{{ category }}</h2>
  <table>
    {%- for card in cards %}
    <tr>
        {% set c = (card | split('|')) %}
        <td>{{ c[0] }}</td>
    <td><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name={{ c[1] | urlencode }}">{{ c[1] }}</a></td>
    <td>
            {%- for mana in c[2] -%}
            <img src="https://svgs.scryfall.io/card-symbols/{{ mana }}.svg" alt="{{ mana }}">
            {%- endfor -%}
    </td>
    </tr>
    {% endfor %}
  </table>
</section>
{% endfor %}
