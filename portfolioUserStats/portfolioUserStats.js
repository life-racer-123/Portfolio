import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioUserStats extends LightningElement {
    @api badges = '33+';
    @api points = '242,175+';
    @api trails = '32+';
    @api trailheadRankingImg = `${PortfolioAssets}/PortfolioAssets/Ranks/Double star ranger.png`;

   
}