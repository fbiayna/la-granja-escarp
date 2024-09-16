import { Images } from "../application/assets/images/images";
import { Logos } from "../application/assets/logos/logos";
import Spot from "../domain/entities/spot";
import { SpotEnum } from "../domain/interfaces/spot.enum";
import { ColorsPalette } from "../presentation/utils/colors/palette";

export class SpotRepository {
  getAll(): Spot[] {
    return this.spots;
  }

  private spots: Spot[] = [
    new Spot(
      SpotEnum.town,
      "La vida al poble",
      [
        "La Granja d'Escarp ofereix als visitants una autèntica experiència de vida de poble, destacant-se per la seva hospitalitat, les festes tradicionals, les tardes tranquil·les amb la garinada i les postes de sol pintoresques. És un lloc acollidor i inclusiu, sense barreres arquitectòniques.",
        "<br />",
        "El municipi brinda l'oportunitat als visitants de connectar amb la vida local, participar en festes tradicionals, conèixer els seus habitants i experimentar la cultura i les tradicions del territori.",
      ],
      Logos.town,
      "Vida al poble",
      Images.town,
      ColorsPalette.goldenAmber,
      "Saber més sobre el municipi",
      "Agenda i notícies"
    ),
    new Spot(
      SpotEnum.aiguabarreig,
      "L'aiguabarreig",
      [
        "L'Aiguabarreig és un punt d'interès natural únic on convergeixen els rius Segre i Cinca, creant un ecosistema ric en biodiversitat. És un lloc on la natura mostra la seva força i bellesa, amb una gran varietat de flora i fauna autòctona.",
        "<br />",
        "La singularitat d'aquesta confluència fluvial ofereix als visitants una experiència de connexió amb la natura excepcional. És un lloc ideal per a l'observació d'aus, passejades tranquil·les pels camins fluvials i activitats d'aventura com el caiac o el piragüisme.",
      ],
      Logos.aiguabarreig,
      "Aiguabarreig",
      Images.aiguabarreig,
      ColorsPalette.slateGray,
      "Saber més sobre l'aiguabarreig"
    ),
    new Spot(
      SpotEnum.heritage,
      "El patrimoni",
      [
        "La Granja d'Escarp atresora un ric patrimoni històric i cultural que abasta des de la prehistòria fins a l'era industrial. Amb vestigis arqueològics com el castell d'Escarp i les ruïnes de les antigues mines de carbó, la zona ofereix una finestra única al passat. Els visitants poden explorar les empremtes dels antics pobladors, com també les estructures industrials.",
        "<br />",
        "El patrimoni de La Granja d'Escarp convida els visitants a endinsar-se en una aventura fascinant a través del temps.",
      ],
      Logos.heritage,
      "Patrimoni",
      Images.heritage,
      ColorsPalette.burntOrange,
      "Saber més sobre la història",
      "Fes un viatge en el temps"
    ),
    new Spot(
      SpotEnum.cicloturisme,
      "El cicloturisme",
      [
        "Les rutes en BTT a La Granja d'Escarp ofereixen una combinació perfecta de paisatges de muntanya i trams plans al costat del riu. Els visitants poden explorar senders emocionants i gaudir de la diversitat del terreny.",
        "<br />",
        "El municipi ofereix una experiència completa per als amants del ciclisme de muntanya, amb rutes per a tots els nivells d'experiència i un entorn natural impressionant per descobrir sobre dues rodes.",
      ],
      Logos.cicloturisme,
      "Cicloturisme",
      Images.cicloturisme,
      ColorsPalette.mutedOlive,
      "Saber més sobre les rutes"
    ),
    new Spot(
      SpotEnum.fishing,
      "La pesca",
      [
        "La Granja d'Escarp és un destí de pesca de renom, oferint als pescadors l'oportunitat de gaudir d'una experiència única en un entorn natural privilegiat. Amb només cinc llocs a tot Catalunya i deu a tot Espanya on es pot pescar 24 hores, és un destí exclusiu per als amants de la pesca.",
        "<br />",
        "El municipi ofereix zones de pesca úniques, tant al riu com als seus afluent, amb la possibilitat de capturar peixos variats i gaudir de la tranquil·litat de l'entorn natural.",
      ],
      Logos.fishing,
      "Pesca",
      Images.fishing,
      ColorsPalette.deepIndigo
    ),
    new Spot(
      SpotEnum.flowers,
      "La floració",
      [
        "La temporada de floració transforma el paisatge de La Granja d'Escarp en un mosaic de colors impressionant, amb els arbres fruiters en plena floració. És un moment únic per gaudir de la serenitat de la natura i contemplar la bellesa efímera de les flors.",
        "<br />",
        "La Granja d'Escarp ofereix una experiència de tranquil·litat i pau durant la temporada de floració, permetent als visitants connectar amb la bellesa de la primavera i gaudir de rutes guiades que destaquen la diversitat floral de la zona.",
      ],
      Logos.flowers,
      "Floració",
      Images.flowers,
      ColorsPalette.coralPink,
      "Saber més sobre la floració"
    ),
    new Spot(
      SpotEnum.fruit,
      "La fruita",
      [
        "La Granja d'Escarp és coneguda per la seva excel·lent fruita dolça i de temporada, cultivada de manera sostenible i com a producte de quilòmetre zero. El clima mediterrani i els terrenys fèrtils de la zona donen lloc a productes de qualitat excepcional.",
        "<br />",
        "Els visitants poden gaudir de la experiència de recollir i degustar fruita fresca directament dels camps, connectant amb els productors locals i apreciant la frescor i la qualitat dels productes de la zona.",
      ],
      Logos.fruit,
      "Fruita",
      Images.fruit,
      ColorsPalette.forestGreen
    ),
  ];
}
