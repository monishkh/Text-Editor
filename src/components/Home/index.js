import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'
import {useState} from 'react'

import {
  AppPage,
  Container,
  ImgContainer,
  Image,
  Heading,
  TextAreaContainer,
  BtnContainer,
  Button1,
  Button2,
  Button3,
  TextArea,
} from './style'

const Home = () => {
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)

  return (
    <>
      <AppPage>
        <Container>
          {/* img container */}
          <ImgContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
            />
          </ImgContainer>

          {/* textarea container */}
          <TextAreaContainer>
            {/* styling buttons */}
            <BtnContainer>
              <Button1 onClick={() => setBold(prev => !prev)} bold={bold}>
                <VscBold />
              </Button1>
              <Button2 onClick={() => setItalic(prev => !prev)} italic={italic}>
                <GoItalic />
              </Button2>
              <Button3
                onClick={() => setUnderline(prev => !prev)}
                underline={underline}
              >
                <AiOutlineUnderline />
              </Button3>
            </BtnContainer>
            <TextArea
              cols={40}
              rows={12}
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </TextAreaContainer>
        </Container>
      </AppPage>
    </>
  )
}

export default Home
