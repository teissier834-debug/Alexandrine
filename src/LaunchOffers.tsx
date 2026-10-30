import { launchOffer, formatPrice } from './launchOffer';

export function LaunchOffers({onChoose}:{onChoose:(id:string)=>void}) {
  if (!launchOffer.enabled) return null;
  return <section className="section launch-offers" id="offre-lancement" aria-labelledby="launch-title">
    <p className="eyebrow">LE MOMENT DE PRENDRE LE LARGE</p>
    <div className="section-heading"><div><h2 id="launch-title">Offre <em>de lancement</em></h2><p>{launchOffer.subtitle}</p></div><a className="text-link" href="#contact">Une question sur les tarifs ? ↗</a></div>
    <div className="launch-grid">{launchOffer.offers.map(o=><article className="launch-card" key={o.id}>
      <h3>{o.title}</h3><p>{o.included}</p>
      <div className="launch-price"><strong>{formatPrice(o.adult)}</strong><span>par adulte</span></div>
      <div className="launch-child"><strong>{formatPrice(o.child)}</strong><span>{launchOffer.childLabel}</span></div>
      <div className="launch-facts"><span>{o.time}</span><span>{o.group}</span></div>
      <button className="button blue" onClick={()=>onChoose(o.id)}>Demander cette offre ↗</button>
    </article>)}</div>
    <div className="launch-private-grid">{launchOffer.privateOffers.map(o=><article className="launch-card" key={o.title}>
      <h3>{o.title}</h3><p>{o.note}</p><p className="launch-hours">{o.time}</p>
      <div className="private-prices"><div><span>1 à 4 personnes</span><strong>{formatPrice(o.small)}</strong></div><div><span>5 à 8 personnes</span><strong>{formatPrice(o.large)}</strong></div></div>
      <p className="launch-unit">Prix pour le groupe, {o.unit}.</p>
      <button className="text-link" onClick={()=>onChoose('prive')}>Préparer ma sortie privée ↗</button>
    </article>)}</div>
    <p className="launch-terms">Point de rencontre : marina d’Uturoa. Tarifs de lancement en XPF, sous réserve de disponibilité et de confirmation par Tutaki Tours. Contactez-nous pour les modalités de l’offre.</p>
  </section>;
}
