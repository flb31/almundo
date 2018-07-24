const assert = require('assert');
const Text = require('../../helpers/text');

const data = [
    {
        "id": "249942",
        "name": "Hotel Stefanos",
        "stars": 3,
        "price": 994.18,
        "image": "4900059_30_b.jpg",
        "amenities": [
            "safety-box",
            "nightclub",
            "deep-soaking-bathtub",
            "beach",
            "business-center"
        ]
    },
    {
        "id": "161901",
        "name": "Hotel Santa Cruz",
        "stars": 3,
        "price": 1267.57,
        "image": "6623490_6_b.jpg",
        "amenities": [
            "nightclub",
            "business-center",
            "bathtub",
            "newspaper",
            "restaurant"
        ]
    },
    {
        "id": "266877",
        "name": "Peru Star Boutique Apartments Hotel",
        "stars": 4,
        "price": 1093.37,
        "image": "3124310_1_b.jpg",
        "amenities": [
            "bathtub",
            "restaurant",
            "deep-soaking-bathtub",
            "bathrobes",
            "kitchen-facilities"
        ]
    },
    {
        "id": "161914",
        "name": "NM Lima Hotel",
        "stars": 4,
        "price": 1445.5,
        "image": "981018_26_b.jpg",
        "amenities": [
            "business-center",
            "nightclub",
            "deep-soaking-bathtub",
            "fitness-center",
            "garden"
        ]
    },
    {
        "id": "512559",
        "name": "Casa Falleri Boutique Hotel",
        "stars": 3,
        "price": 1634.03,
        "image": "11908954_150_b.jpg",
        "amenities": [
            "nightclub",
            "garden",
            "coffe-maker",
            "kitchen-facilities",
            "deep-soaking-bathtub"
        ]
      },
];

describe('Text helpers', () => {
    it('should return two by name', () => {
        const result = data.filter(Text.search('Boutique', 'name'));
        assert.equal(result.length, 2);
    });

    it('should return empty by name', () => {
        const result = data.filter(Text.search('this name does not exist in json', 'name'));
        assert.equal(result.length, 0);
    });

    it('should return full if queary is null', () => {
        const result = data.filter(Text.search('', 'name'));
        assert.equal(result.length, data.length);
    });

    it('should return one hotel by id', () => {
        const result = data.filter(Text.search('512559', 'id'));
        assert.equal(result[0].name, 'Casa Falleri Boutique Hotel');
    });

    it('should return exception if attribute is undefined, null, false or not exist', () => {

        try {
            data.filter(Text.search('', undefined));
        } catch (e) {
            assert.equal(e, 'Attribute is empty');
        }

        try {
            data.filter(Text.search('other search', null));
        } catch (e) {
            assert.equal(e, 'Attribute is empty');
        }

        try {
            data.filter(Text.search('', false));
        } catch (e) {
            assert.equal(e, 'Attribute is empty');
        }

        try {
            data.filter(Text.search('Boutique'));
        } catch (e) {
            assert.equal(e, 'Attribute is empty');
        }
    });
});