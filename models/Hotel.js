const mongoose = require('mongoose');
const slugify = require('slugify');
const hotelSchema = new mongoose.Schema(
    {
        pageTitle: String,
        keywords: String,
        metaDescription: String,
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        description: String,
        address: String,
        slug: {
            type: String,
            unique: true
        },
        images: [String],
        src: String,
        url: String,
        bannerText: String,
        bannerImg: String,
        averageRating: String,

        status: {
            type: String,
            enum: ['open', 'closed', 'maintainance'],
            default: 'open'
        },
        location: String,
        instagram: String,
        banner: {
            text: {
                type: String,
                default:
                    'Where You Get Trapped: in the Beauty of the World and Unforgettable Happiness!'
            },
            src: {
                type: String,
                default: '/banner.jpeg'
            }
        },
        offers: [
            {
                title: String,
                discount: String,
                startDate: String,
                endDate: String,
                src: String
            }
        ],
        whenToVisit: {
            text: String,
            timing: [
                {
                    title: String,
                    description: String
                }
            ]
        },
        howToGetThere: {
            text: String,
            location: String
        },
        thingsToDo: {
            text: String,
            activities: [
                {
                    title: String,
                    description: String,
                    src: String
                }
            ]
        },
        premiumFacilities: {
            type: [
                {
                    name: String,
                    description: String,
                    src: String
                }
            ]
        },
        otherFacilities: {
            type: [
                {
                    name: String,
                    description: String,
                    src: String
                }
            ]
        },
        coordinates: {
            latitude: {
                type: Number,
                default: 0
            },
            longitude: {
                type: Number,
                default: 0
            }
        },
        addedBy: {
            type: String,
            default: '-'
        },
        modifiedBy: {
            type: String,
            default: '-'
        }
    },
    {
        timestamps: true
    }
);

hotelSchema.pre('save', async function (next) {
    // @ts-ignore
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Hotel =
    mongoose.models.Hotels || mongoose.model('Hotels', hotelSchema);

module.exports = Hotel;
