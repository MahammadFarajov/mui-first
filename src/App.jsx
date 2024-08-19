import { Check, WindowSharp } from "@mui/icons-material"
import { Box, Button, Container, CssBaseline, Grid, Typography } from "@mui/material"
import city from "./assets/city.avif"
import city2 from "./assets/city2.jpg"
import city3 from "./assets/city3.jpeg"
import top from "./assets/top.webp"
import window from "./assets/window.png"
function App() {

  return (
    <>
      <CssBaseline />
      <Box sx={{py: 5, bgcolor: '#fff', fontFamily: 'Inter', borderBottom: 0.1, borderColor: '#a3c9ff'}}>
        <Container maxWidth="xl" sx={{display: "flex", alignItems: "center", justifyContent: 'space-between'}}>
          <Typography variant="h4" sx={{display: "flex", alignItems: "center", gap: 1, color: "customlightblue.main",}}><WindowSharp sx={{fontSize: 62,}}/>Window</Typography>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 5,}}>
            <Typography sx={{color: 'customdarkblue.main', fontSize: 22,}}>Products</Typography>
            <Typography sx={{color: 'customdarkblue.main', fontSize: 22,}}>Features</Typography>
            <Typography sx={{color: 'customdarkblue.main', fontSize: 22,}}>Design</Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 2,}}>
            <Button sx={{color: 'customlightblue.main', px: 3, py: 1, fontSize: 16,}} variant="text">
              Log In
            </Button>
            <Button sx={{bgcolor: 'customlightblue.main', px: 3, py: 1, fontSize: 16,}} variant="contained">
              Sign Up
            </Button>
          </Box>
          
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{display: 'flex', gap: 50, mt: 10, alignItems: "center"}}>
          <Box>
            <Typography variant="h1" sx={{color: '#1458b8'}}>Designs From <Typography variant="h1" sx={{fontWeight: 800}}>The Future</Typography></Typography>
            <Box sx={{borderBottom: 2, borderColor: 'customdarkblue.main', mt: 6, mb: 6,}}></Box>
            <Typography sx={{fontSize: 16, fontWeight: 600, color: 'customdarkblue.main'}}>Simple and Durable Design | Window</Typography>
          </Box>
          <Box >
          <Box sx={{display: "flex", gap: 5, mb: 5,}}>
            <img width={250} height={250} src={city} alt="" />
            <img width={250} height={250} src={city2} alt="" />
          </Box>
          <Box sx={{display: "flex", gap: 5}}>
            <img width={250} height={250} src={city3} alt="" />
            <img width={250} height={250} src={top} alt="" />
          </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box sx={{mt: 5}}>
          <Typography sx={{textAlign: 'center', color: 'customblack.main'}} variant="h3">Product Information</Typography>
          <Typography sx={{textAlign: 'center', color: 'customblack.main', mb: 5,}} variant="h6">Our Window has simple but durable system Lorem ipsum dolor sit amet.</Typography>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={window} alt="" />
            <Box sx={{display: "flex", flexDirection: "column", gap: 1,}}>
              <Typography><Check /> Lorem, ipsum dolor. </Typography>
              <Typography><Check /> Lorem consectetur adipisicing elit. Dolor a sit amet. </Typography>
              <Typography><Check /> sit amet dolor </Typography>
              <Typography><Check /> Lorem ipsum dolor sit amet consectetur. </Typography>
              <Typography><Check /> Lorem ipsum dolmaxime officiis or sit amet consectetur adipisicing. </Typography>
              <Typography><Check /> Lorem ipsum dolor sit amet. </Typography>
              <Typography><Check /> Lorem, ipsum. </Typography>
              <Typography><Check /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias nisi beatae maxime officiis quam magnam.. </Typography>
              <Typography><Check /> beatae maxime officiis quam magnam.. </Typography>
              <Typography><Check /> Loremalias nisi , ipsum dolor. </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App
