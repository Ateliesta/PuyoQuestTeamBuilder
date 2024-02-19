interface Card {
    Name: string,
    Image: string,
    LeaderSkill: string,
    ActiveSkill: string,
    FullPowerSkill: string,
    CrossAbility: string,
    Cost: string,
    Rarity: string,
    Color: string,
    SecondColor: string,
}

class PuyoQuestTeamBuilderViewController {
    private _cards: Card[];

    public PuyoQuestTeamBuilderViewController() {

    }

    public refreshView() {

    }

    private renderCardRow(card: Card) {
        var baseUrl = 'https://puyonexus.com';
        var imageLink = card.Image.includes("/thumb") ? card.Image.replace("/thumb", "").substring(0, card.Image.lastIndexOf("/")) : card.Image;

        return '<tr>'+
                   '<td>' + card.Name + '</td>'+
                   '<td><img src="' + baseUrl + imageLink + '" style="height:90px;"></img></td>'+
                   '<td>' + card.Color + '</td>'+
                   '<td>' + card.SecondColor + '</td>'+
                   '<td>' + card.Cost + '</td>'+
                   '<td>' + card.Rarity + '</td>'+
                   '<td>' + card.LeaderSkill + '</td>'+
                   '<td>' + card.ActiveSkill + '</td>'+
                   '<td>' + card.FullPowerSkill + '</td>'+
                   '<td>' + card.CrossAbility + '</td>'+
               '</tr>';
    }
}