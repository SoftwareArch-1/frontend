import { useEffect, useState } from 'react'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import { review } from '../../api/review'
import { AddReviewCard } from '../AddReviewCard'
import { ContactCard } from '../Contactcard'
import { ReviewCard } from '../ReviewCard'
import { ReviewSummary } from '../reviewSummary'
import UserCard from '../UserCard'

const ViewProfilePageContent = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Nav />
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        className={
          'flex h-auto flex-col justify-center rounded-lg bg-slate-700 drop-shadow-md'
        }
      >
        <AddReviewCard/>
      </Modal>
      <main className="flex flex-col gap-7 px-5 py-5">
        <main className="flex flex-col gap-3">
          <UserCard
            name={'John'}
            surname={'Doe'}
            detail={'detail'}
            editable={false}
          />
          <ContactCard line={'lineId'} discord={'discordId'} />
        </main>
        <main className="flex flex-col gap-3">
          <ReviewSummary
            fiveStar={55}
            fourStar={20}
            threeStar={15}
            twoStar={0}
            oneStar={10}
          />
          <button
            onClick={() => {
              setShowModal(true)
            }}
          >
            <section className="w-100 flex max-h-24 flex-col justify-center rounded-lg bg-white drop-shadow-md">
              <div className="flex w-full items-center justify-center py-2 text-base">
                Add Review
              </div>
            </section>
          </button>
          <div className="flex flex-col gap-1">
            <ReviewCard
              stars={3}
              description={'detail'}
              reviewDate={new Date()}
            />
            <ReviewCard
              stars={4}
              description={'detail'}
              reviewDate={new Date()}
            />
            <ReviewCard
              stars={5}
              description={'detail'}
              reviewDate={new Date()}
            />
          </div>
        </main>
      </main>
    </>
  )
}

export default ViewProfilePageContent
