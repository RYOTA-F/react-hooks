import { FC, useEffect } from 'react'
/* components */
import Loading from '../../components/loading'
import PageTitle from '../../components/pageTitle'

const LoadingTest: FC = () => {
  const { RenderLoading, isLoading, setIsLoading } = Loading()

  useEffect(() => {
    if (!isLoading) return
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [isLoading, setIsLoading])

  return (
    <>
      <PageTitle title="LoadingTest" />
      <button onClick={() => setIsLoading(true)}>Change Loading</button>
      <RenderLoading />
    </>
  )
}

export default LoadingTest
