import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../Components/StatBox";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const LottoURL = "https://content.nationallottery.co.za/images/siteImg/icons/game_lotto.png";
  const LottoPlusURL = "https://content.nationallottery.co.za/images/siteImg/icons/game_lottoplus1.png";
  const LottoPlus2URL = "https://content.nationallottery.co.za/images/siteImg/icons/game_lottoplus2.png";
  const PowerballURL = "https://content.nationallottery.co.za/images/siteImg/icons/game_powerball.png";
  const PowerballPlusURL = "https://content.nationallottery.co.za/images/siteImg/icons/game_powerballPlus.png";
  const DailyLottoURL = "https://content.nationallottery.co.za/images/siteImg/icons/game_dailylotto.png";
  



  return (

    <Box m="20px">
      
      {/* GRID & CHARTS */}
      <Box
        width="100%"
        overflow= 'auto'
      >
      <Carousel
      showArrows={false}
      >
        {/* ROW 1 */}
        <Box
          width="250px"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="R1,200,000"
            subtitle="Lotto"
            progress="0.50"
            increase="+14%"
            icon={
              <img
              src={LottoURL}
              alt="img"
              style={{ color: colors.greenAccent[600], fontSize: "26px", width: "90px", height: "auto" }}
          />
            }
          />
        </Box>
        <Box
        width="300px"
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="R32,441"
          subtitle="Lotto Plus"
          progress="0.30"
          increase="+5%"
          icon={
            <img
            src={LottoPlusURL}
            alt="img"
            style={{ color: colors.greenAccent[600], fontSize: "26px", width: "90px", height: "auto" }}
        />
          }
        />
      </Box>
      <Box
      width="300px"
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title="R32,441"
        subtitle="Lotto Plus 2"
        progress="0.30"
        increase="+5%"
        icon={
          <img
          src={LottoPlus2URL}
          alt="img"
          style={{ color: colors.greenAccent[600], fontSize: "26px", width: "90px", height: "auto" }}
      />
        }
      />
    </Box>
        <Box
          width="300px"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="R431,225"
            subtitle="Powerball"
            progress="0.50"
            increase="+21%"
            icon={
              <img
                  src={PowerballURL}
                  alt="img"
                  style={{ color: colors.greenAccent[600], fontSize: "26px", width: "90px", height: "auto" }}
              />
            }
          />
        </Box>


        <Box
          width="300px"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="R32,441"
            subtitle="Powerball Plus"
            progress="0.30"
            increase="+5%"
            icon={
              <img
              src={PowerballPlusURL}
              alt="img"
              style={{ color: colors.greenAccent[600], fontSize: "26px", width: "90px", height: "auto" }}
          />
            }
          />
        </Box>
        <Box
          width="300px"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="R1,325,134"
            subtitle="Daily Lotto"
            progress="0.80"
            increase="+43%"
            icon={
              <img
              src={DailyLottoURL}
              alt="img"
              style={{ color: colors.greenAccent[600], fontSize: "26px", width: "90px", height: "auto" }}
          />
            }
          />
        </Box>
        </Carousel>
      </Box>
    </Box>

  );
};

export default Dashboard;