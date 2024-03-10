import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileAvatar from "./ProfileAvatar";

const ProfileMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full bg-[#EFE5FC] py-3 rounded-md flex flex-row gap-2 items-center">
          <div className="flex justify-self-start pl-2">
            <ProfileAvatar />
          </div>
          <div>
            <span>Mr.You</span>
          </div>
          <div>{/* dropdown icon */}</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profil</DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem>Se Déconnecter</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileMenu;
