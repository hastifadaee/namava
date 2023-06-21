import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector} from "react-redux";
import {GetEpisodes} from "../queries/GetEpisodes";
import {useEffect, useState} from "react";
import {Episodes} from "./Episodes";

export const Selects = () => {
    const [id, setId] = useState('');
    const [episode, setEpisode] = useState([]);
    const {seasons} = useSelector(state => state.app);
    const handleChange = async (event) => {
        const data = await GetEpisodes(event.target.value);
        setId(event.target.value);
        setEpisode(data.data.result);
    };
    useEffect(() => {
        GetEpisodes(seasons[0].seasonId)
            .then((result) => {
                setEpisode(result.data.result);
                setId(seasons[0].seasonId);
            })
    }, []);
    return (
        episode.length !== 0 ? (
            < div>
                {
                    seasons.length === 1 ?
                        <div
                            className={'text-center px-1 py-2 rounded-2 mb-3 bg-transparent border-white border text-white'}
                            style={{fontSize: 13, width: 60}}>فصل 1</div> :
                        <FormControl variant="standard" sx={{m: 1, minWidth: 150}}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="selector"
                                onChange={handleChange}
                                label="Age"
                                value={id}
                                sx={{width : 150 , textAlign : "center"}}
                            >
                                {
                                    seasons.map((element, index) => {
                                        return (
                                            <MenuItem key={index} value={element.seasonId}>فصل {element.seasonOrderId}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>

                }
                < Episodes eps={episode}/>
            </div>) : ''
    );
}

