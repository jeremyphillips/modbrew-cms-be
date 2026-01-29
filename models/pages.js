import mongoose from 'mongoose'

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    components: {
      type: Array,
      required: false
    },
    seo: {
      title: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    }
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
)

const Page = mongoose.model('Component', pageSchema)
export default Page
