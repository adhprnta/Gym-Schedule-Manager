class Activity:
    def __init__(self, name):
        self.name = name


class GymSchedule(Activity):

    def __init__(self, name, day, time, duration):
        super().__init__(name)

        # properties
        self.day = day
        self.time = time
        self.duration = duration

    # method
    def get_schedule(self):
        return f"{self.name} pada {self.day} jam {self.time}"

    # polymorphism
    def show_info(self):
        return f"Latihan {self.name} selama {self.duration} menit"