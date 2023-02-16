import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSlectedView } from "../views/NothingSlectedView"

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSlectedView />
        </JournalLayout>
    )
}
