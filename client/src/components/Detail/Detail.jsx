import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as action from "../../redux/actions";

export default function Detail() {

    const dispatch = useDispatch()

    const {id} = useParams()


    useEffect(() => {
        dispatch(action.getDetails(id))
    }, [dispatch])


    const details = useSelector((state) => state.details);

    console.log(details)
    return (
        <div>
          <h1>{details.name}{details.rating}</h1>
        </div>
    )
}