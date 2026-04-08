<script>
  import MemberCard from '../ui/MemberCard.svelte';
</script>

<div class="panel">
  <div class="panel-header">
    <div class="panel-header-row">
      <div class="panel-title">
        OPERATOR · OPERÁTOR · OPERATER
        <div class="panel-title-sub">ОПЕРАТОР</div>
      </div>
      <span class="panel-code">NODE-001</span>
    </div>
  </div>
  <div class="stamp">CLASSIFIED</div>

  <div class="micro-readout">
    <span class="lbl">KÓD<span class="lbl-cyr">КОД</span></span>
    <div class="lcd lcd-14 lcd-small">IGOR3M8P5Q</div>
  </div>
  <div class="micro-readout">
    <span class="lbl">ROLA<span class="lbl-cyr">УЛОГА</span></span>
    <div class="lcd lcd-14 lcd-small">SUPER ADMIN</div>
  </div>
  <div class="micro-readout">
    <span class="lbl">MREŽA<span class="lbl-cyr">МРЕЖА</span></span>
    <div class="lcd lcd-14 lcd-small">50H MP 3841</div>
  </div>
  <div class="micro-readout">
    <span class="lbl">STAV<span class="lbl-cyr">СТАЊЕ</span></span>
    <div class="lcd lcd-14 lcd-small">AKTIVAN</div>
  </div>

  <hr class="hr-dash">

  <div class="section-title">
    MEMBERS · ČLENOVIA · ČLANOVI
    <span class="section-title-cyr">ЧЛЕНЫ</span>
  </div>
  <div class="member-list">
    <MemberCard
      initials="JM"
      name="JOZEF MICHALEK"
      code="AWAITING MEMBER"
      codeCyr="ČAKÁ NA AKTIVÁCIU · ЧЕКА ЧЛАНА"
      ledColor="amber"
      ledAnimation="blink"
    />
    <MemberCard
      initials="JD"
      name="JANKO DRAGOVIC"
      code="AWAITING MEMBER"
      codeCyr="ČAKÁ NA AKTIVÁCIU · ЧЕКА ЧЛАНА"
      ledColor="amber"
      ledAnimation="blink"
    />
    <MemberCard
      initials="MM"
      name="MARKO MIJATOVIC"
      code="AWAITING MEMBER"
      codeCyr="ČAKÁ NA AKTIVÁCIU · ЧЕКА ЧЛАНА"
      ledColor="amber"
      ledAnimation="blink"
    />
    <MemberCard
      initials="IK"
      name="IGOR KADIC"
      code="AWAITING MEMBER"
      codeCyr="ČAKÁ NA AKTIVÁCIU · ЧЕКА ЧЛАНА"
      ledColor="amber"
      ledAnimation="blink"
    />
  </div>
</div>
