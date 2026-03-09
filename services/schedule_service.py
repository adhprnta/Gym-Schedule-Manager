class ScheduleService:

    def __init__(self):
        self.schedules = []

    # method tambah
    def add_schedule(self, schedule):
        self.schedules.append(schedule)

    # method baca data
    def get_all(self):
        return self.schedules

    # method hapus
    def delete_schedule(self, index):
        if index < len(self.schedules):
            self.schedules.pop(index)