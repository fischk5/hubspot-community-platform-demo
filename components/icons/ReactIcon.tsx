import { FaHubspot, FaCarrot, FaCodePullRequest, FaCircleInfo, FaComments } from "react-icons/fa6";

interface ReactIconProps {
    keyname: string;
}

export default function ReactIcon({ keyname }: ReactIconProps) {
    const icons: Record<string, React.ReactNode> = {
        product: <FaHubspot/>,
        request: <FaCodePullRequest/>,
        support: <FaCircleInfo/>,
        community: <FaComments/>
    }

    return icons[keyname] || <FaCarrot/>
}