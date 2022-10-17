import { useQueries, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BottomNavigation from '../../../core/components/ButtomNavigation'
import LoadingSpinner from '../../../core/components/LoadingSpinner'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import { getProfile } from '../../api/profile'
import { AddReviewCard } from '../AddReviewCard'
import { ContactCard } from '../Contactcard'
import { ReviewCard } from '../ReviewCard'
import { ReviewSummary } from '../reviewSummary'
import UserCard from '../UserCard'

const ViewProfilePageContent = () => {
  const [showModal, setShowModal] = useState(false)

  const router = useRouter()
  const { id } = router.query

  const { data, refetch } = useQuery(
    ['getProfile', id],
    () => getProfile(String(id)),
    {
      enabled: !!id,
    }
  )

  return (
    <div className="h-screen">
      <Nav />
      {!data ? (
        <div className="flex h-full items-center justify-center self-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            className={
              'flex h-auto flex-col justify-center rounded-lg bg-slate-700 drop-shadow-md'
            }
          >
            <AddReviewCard
              refetch={refetch}
              onCloseModal={() => setShowModal(false)}
            />
          </Modal>
          <main className="flex flex-col gap-7 px-5 py-5">
            <main className="flex flex-col gap-3">
              <UserCard
                name={data.profile.name}
                surname={data.profile.surname}
                detail={
                  data.profile.description ? data.profile.description : '-'
                }
                editable={false}
              />
              <ContactCard
                line={data.profile.lineId ? data.profile.lineId : '-'}
                discord={data.profile.discordId ? data.profile.discordId : '-'}
              />
            </main>
            <main className="flex flex-col gap-3">
              <ReviewSummary
                fiveStar={data.stars[5]}
                fourStar={data.stars[4]}
                threeStar={data.stars[3]}
                twoStar={data.stars[2]}
                oneStar={data.stars[1]}
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
                {data.reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    stars={review.stars}
                    description={review.content}
                    reviewDate={review.createdAt}
                  />
                ))}
              </div>
            </main>
          </main>
        </>
      )}
      <BottomNavigation />
    </div>
  )
}

export default ViewProfilePageContent
