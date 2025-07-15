import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
    let INIT_URL = "https://media.istockphoto.com/id/821865368/photo/colorful-ocean-beach-sunrise.jpg?s=612x612&w=0&k=20&c=qJJ5eX6GXpgIjS-9Z8atniwJZZvqomFT96nmpQcOJ8I=";

    let HOT_URl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HX6TAsXI6y8r6taFeLRtWZQijWPYZdjTaw&s";
    let COLD_URL = "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";
    let RAIN_URL = "https://img.lovepik.com/photo/60182/9655.jpg_wh860.jpg";

    let styles = {
        display: "flex",
        justifyContent: "center",

    }

    return (
        <div className="InfoBox" >
            <br />
            <br />
            <div className='cardContainer' style={styles}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp_c > 15
                                ? HOT_URl
                                : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                 info.humidity > 80
                                 ? <ThunderstormIcon/>
                                 : info.temp_c > 15
                                 ? <WbSunnyIcon/>
                                 : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp_c}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike_c}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}