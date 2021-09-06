import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
    return (
        <>
            <div className={classes.answers}>
                <Checkbox className={classes.answer} text="Test Answer" />

                <Checkbox className={classes.answer} text="Test Answer 2" />

                <Checkbox className={classes.answer} text="Test Answer 3" />

                <Checkbox className={classes.answer} text="Test Answer 4" />

                <Checkbox className={classes.answer} text="Test Answer 5" />

                <Checkbox className={classes.answer} text="Test Answer 6" />

                <Checkbox className={classes.answer} text="Test Answer 7" />

                <Checkbox className={classes.answer} text="Test Answer 8" />

                <Checkbox className={classes.answer} text="Test Answer 9" />

                <Checkbox className={classes.answer} text="Test Answer 10" />
            </div>
        </>
    )
}
