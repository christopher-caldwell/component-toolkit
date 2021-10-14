import { FC, useState } from 'react'
import { styled, Grid, MobileStepper, Button } from '@mui/material'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import chopArray from 'array-chop'

export const SlideShow = function <TData>({ list, chunkLimit, slideInterval, RenderComponent }: Props<TData>) {
  const reviewChunks = chopArray(list, chunkLimit)
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = reviewChunks.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }
  return (
    <>
      <AutoPlaySwipeableViews
        direction='incremental'
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={slideInterval}
        loop
        enableMouseEvents
      >
        {reviewChunks.map((chunks, index) => (
          <Grid container spacing={3} key={`chunk[${index}]`}>
            {chunks.map((chunk, chunkIndex) => (
              <RenderComponent key={`sub-chunk=${chunkIndex}`} {...chunk} />
            ))}
          </Grid>
        ))}
      </AutoPlaySwipeableViews>
      <StepperControl>
        <MobileStepper
          sx={{ background: 'transparent' }}
          steps={maxSteps}
          position='static'
          activeStep={activeStep}
          nextButton={
            <Button
              aria-label='see-next-image'
              size='small'
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button aria-label='see-previous-image' size='small' onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </StepperControl>
    </>
  )
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const StepperControl = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
`

interface Props<TData> {
  RenderComponent: FC<TData>
  list: TData[]
  chunkLimit: number
  slideInterval: number
}
