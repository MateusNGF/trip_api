import { EntityRepository, Repository } from 'typeorm'
import {TouristSpots} from './tourist_spots.entity'

@EntityRepository(TouristSpots)
export class SpotsRepository extends Repository<TouristSpots> {
    
    async createSpot(spot : TouristSpots){
        return await spot.save()
    }

    async getSpots(){
        return this.find({
            relations : ["city"]
        })
    }
}