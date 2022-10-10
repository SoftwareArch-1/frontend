import { Nav } from '../src/core/components/Nav'
import { AddReviewCard } from '../src/user/component/AddReviewCard'
import { ContactCard } from '../src/user/component/Contactcard'
import { ReviewCard } from '../src/user/component/ReviewCard'
import { ReviewSummary } from '../src/user/component/reviewSummary'
import UserCard from '../src/user/component/UserCard'

const test = () => {
  return (
    <>
      <Nav />
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
          <AddReviewCard />
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

export default test
